"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3Storage = void 0;
const crypto_1 = require("crypto");
const stream_1 = require("stream");
const file_type_1 = require("file-type");
const html_comment_regex_1 = require("html-comment-regex");
const parallel = require("run-parallel");
const lib_storage_1 = require("@aws-sdk/lib-storage");
const client_s3_1 = require("@aws-sdk/client-s3");
const util = require("util");
function staticValue(value) {
    return function (req, file, cb) {
        cb(null, value);
    };
}
const defaultAcl = staticValue('private');
const defaultContentType = staticValue('application/octet-stream');
const defaultMetadata = staticValue(undefined);
const defaultCacheControl = staticValue(null);
const defaultContentDisposition = staticValue(null);
const defaultContentEncoding = staticValue(null);
const defaultStorageClass = staticValue('STANDARD');
const defaultSSE = staticValue(null);
const defaultSSEKMS = staticValue(null);
const svgRegex = /^\s*(?:<\?xml[^>]*>\s*)?(?:<!doctype svg[^>]*>\s*)?<svg[^>]*>/i;
function isSvg(svg) {
    svg = svg.replace(/\s*<!Entity\s+\S*\s*(?:"|')[^"]+(?:"|')\s*>/gim, '');
    svg = svg.replace(/\[?(?:\s*<![A-Z]+[^>]*>\s*)*\]?/g, '');
    svg = svg.replace(html_comment_regex_1.default, '');
    return svgRegex.test(svg);
}
function defaultKey(req, file, cb) {
    console.log('defaultKey');
    crypto_1.default.randomBytes(16, function (err, raw) {
        cb(err, err ? undefined : raw.toString('hex'));
    });
}
function autoContentType(req, file, cb) {
    console.log('autoContentType');
    file.stream.once('data', function (firstChunk) {
        const type = (0, file_type_1.default)(firstChunk);
        let mime = 'application/octet-stream';
        if ((!type || type.ext === 'xml') && isSvg(firstChunk.toString())) {
            mime = 'image/svg+xml';
        }
        else if (type) {
            mime = type.mime;
        }
        const outStream = new stream_1.default.PassThrough();
        outStream.write(firstChunk);
        file.stream.pipe(outStream);
        cb(null, mime, outStream);
    });
}
function collect(storage, req, file, cb) {
    parallel([
        storage.getBucket.bind(storage, req, file),
        storage.getKey.bind(storage, req, file),
        storage.getAcl.bind(storage, req, file),
        storage.getMetadata.bind(storage, req, file),
        storage.getCacheControl.bind(storage, req, file),
        storage.getContentDisposition.bind(storage, req, file),
        storage.getStorageClass.bind(storage, req, file),
        storage.getSSE.bind(storage, req, file),
        storage.getSSEKMS.bind(storage, req, file),
        storage.getContentEncoding.bind(storage, req, file),
    ], function (err, values) {
        if (err)
            return cb(err);
        storage.getContentType(req, file, function (err, contentType, replacementStream) {
            if (err)
                return cb(err);
            console.log(values);
            cb.call(storage, null, {
                bucket: values[0],
                key: values[1],
                acl: values[2],
                metadata: values[3],
                cacheControl: values[4],
                contentDisposition: values[5],
                storageClass: values[6],
                contentType: contentType,
                replacementStream: replacementStream,
                serverSideEncryption: values[7],
                sseKmsKeyId: values[8],
                contentEncoding: values[9],
            });
        });
    });
}
class S3Storage {
    constructor(opts) {
        this.opts = opts;
        this.s3 = this.opts.s3;
        this.getBucket = staticValue(this.opts.bucket);
        this.getKey = this.opts.key;
        this.getAcl = defaultAcl;
        this.getContentType = defaultContentType;
        this.getMetadata = this.opts.metadata;
        this.getCacheControl = defaultCacheControl;
        this.getContentDisposition = defaultContentDisposition;
        this.getContentEncoding = defaultContentEncoding;
        this.getStorageClass = defaultStorageClass;
        this.getSSE = defaultSSE;
        this.getSSEKMS = defaultSSEKMS;
    }
    _handleFile(req, file, cb) {
        collect(this, req, file, function (err, opts) {
            if (err)
                return cb(err);
            let currentSize = 0;
            const params = {
                Bucket: opts.bucket,
                Key: opts.key,
                ACL: opts.acl,
                CacheControl: opts.cacheControl,
                ContentType: opts.contentType,
                Metadata: opts.metadata,
                StorageClass: opts.storageClass,
                ServerSideEncryption: opts.serverSideEncryption,
                SSEKMSKeyId: opts.sseKmsKeyId,
                Body: opts.replacementStream || file.stream,
                ContentDisposition: undefined,
                ContentEncoding: undefined,
            };
            if (opts.contentDisposition) {
                params.ContentDisposition = opts.contentDisposition;
            }
            if (opts.contentEncoding) {
                params.ContentEncoding = opts.contentEncoding;
            }
            const upload = new lib_storage_1.Upload({
                client: this.s3,
                params: params,
            });
            upload.on('httpUploadProgress', function (ev) {
                if (ev.total)
                    currentSize = ev.total;
            });
            util.callbackify(upload.done.bind(upload))(function (err, result) {
                console.log({ err, result });
                if (err)
                    return cb(err);
                cb(null, {
                    size: currentSize,
                    bucket: opts.bucket,
                    key: opts.key,
                    acl: opts.acl,
                    contentType: opts.contentType,
                    contentDisposition: opts.contentDisposition,
                    contentEncoding: opts.contentEncoding,
                    storageClass: opts.storageClass,
                    serverSideEncryption: opts.serverSideEncryption,
                    metadata: opts.metadata,
                    location: result.Location,
                    etag: result.ETag,
                    versionId: result.VersionId,
                });
            });
        });
    }
    _removeFile(req, file, cb) {
        this.s3.send(new client_s3_1.DeleteObjectCommand({
            Bucket: file.bucket,
            Key: file.key,
        }), cb);
    }
}
exports.S3Storage = S3Storage;
//# sourceMappingURL=multer-s3.js.map