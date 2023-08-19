import {HttpClient} from '@angular/common/http';
import {Component} from '@angular/core';
import {DownloadModel, DownloadService} from './download.service';
import {distinctUntilKeyChanged, tap} from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(
        private http: HttpClient,
        private downloadService: DownloadService
    ) {
    }

    start() {
        console.log('start');
        const file1 = new DownloadModel();
        file1.link = 'http://localhost:3000?name=1.jpg';
        file1.fileSize = 41252062;
        file1.fileName = '1.jpg';
        const file2 = new DownloadModel();
        file2.link = 'http://localhost:3000?name=2.jpg';
        file2.fileSize = 39986505;
        file2.fileName = '2.jpg';

        const download$ = this.downloadService.downloadMultiple([file1, file2]).pipe(tap({
            next: (data) => {
                // console.log('download$ next: ', data);
            },
            complete: () => {
                // console.log('download$ complete: ');

            },
            error: (error) => {
                // console.log('download$ error: ', error);

            }
        }));

        const zip$ = this.downloadService.zipMultiple(download$);

        zip$
            .pipe(distinctUntilKeyChanged('progress')).subscribe({
            next: (data) => {
                console.log('zip$ next: ', data);

                if (data.zipFile) {
                    const downloadAncher = document.createElement("a");
                    downloadAncher.style.display = "none";
                    downloadAncher.href = URL.createObjectURL(data.zipFile);
                    downloadAncher.download = 'images.zip';
                    downloadAncher.click();
                }
            },
            complete: () => {
                console.log('zip$ complete: ');

            },
            error: (error) => {
                console.log('zip$ error: ', error);

            }
        });
    }
}
