## First compile

```
forgot to copy
```

## First migrate

```
Compiling your contracts...
===========================
✔ Fetching solc version list from solc-bin. Attempt #1
✔ Fetching solc version list from solc-bin. Attempt #1
> Everything is up to date, there is nothing to compile.



Starting migrations...
======================
> Network name:    'development'
> Network id:      5777
> Block gas limit: 6721975 (0x6691b7)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x3b2e3108949e2601b2235dc0c7ec89263c024afd390acaae0e09b9a836b3a481
   > Blocks: 0            Seconds: 0
   > contract address:    0x64052b409FBF1f59aF06faB5Fb804D49025162De
   > block number:        1
   > block timestamp:     1640825006
   > account:             0xFcBaBbA56CdE9a1C1cAc343f076C891267841E2B
   > balance:             99.9931228
   > gas used:            343860 (0x53f34)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.0068772 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:           0.0068772 ETH


2_deploy_contracts.js
=====================

   Deploying 'KryptoBird'
   ----------------------
   > transaction hash:    0x11bd4333bfdc7b2a8a73ebc03276c794e31c7cb05cc78e3821f735be7e4c5116
   > Blocks: 0            Seconds: 0
   > contract address:    0xBa0326c80E0c2299DDbACAb406542CF87B094E16
   > block number:        3
   > block timestamp:     1640825006
   > account:             0xFcBaBbA56CdE9a1C1cAc343f076C891267841E2B
   > balance:             99.98693164
   > gas used:            267018 (0x4130a)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00534036 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00534036 ETH


Summary
=======
> Total deployments:   2
> Final cost:          0.01221756 ETH

```

## First Console

```
truffle console
truffle(development)> kryptoBird = await KryptoBird.deployed()
truffle(development)> kryptoBird

TruffleContract {
  constructor: [Function: TruffleContract] {
    _constructorMethods: {
      configureNetwork: [Function: configureNetwork],
      setProvider: [Function: setProvider],
      new: [Function: new],
      at: [AsyncFunction: at],
      deployed: [AsyncFunction: deployed],
      defaults: [Function: defaults],
      hasNetwork: [Function: hasNetwork],
      isDeployed: [Function: isDeployed],
      detectNetwork: [AsyncFunction: detectNetwork],
      setNetwork: [Function: setNetwork],
      setNetworkType: [Function: setNetworkType],
      setWallet: [Function: setWallet],
      resetAddress: [Function: resetAddress],
      link: [Function: link],
      clone: [Function: clone],
      addProp: [Function: addProp],
      toJSON: [Function: toJSON],
      decodeLogs: [Function: decodeLogs]
    },
    _properties: {
      contract_name: [Object],
      contractName: [Object],
      gasMultiplier: [Object],
      timeoutBlocks: [Object],
      autoGas: [Object],
      numberFormat: [Object],
      abi: [Object],
      metadata: [Function: metadata],
      network: [Function: network],
      networks: [Function: networks],
      address: [Object],
      transactionHash: [Object],
      links: [Function: links],
      events: [Function: events],
      binary: [Function: binary],
      deployedBinary: [Function: deployedBinary],
      unlinked_binary: [Object],
      bytecode: [Object],
      deployedBytecode: [Object],
      sourceMap: [Object],
      deployedSourceMap: [Object],
      source: [Object],
      sourcePath: [Object],
      legacyAST: [Object],
      ast: [Object],
      compiler: [Object],
      schema_version: [Function: schema_version],
      schemaVersion: [Function: schemaVersion],
      updated_at: [Function: updated_at],
      updatedAt: [Function: updatedAt],
      userdoc: [Function: userdoc],
      devdoc: [Function: devdoc],
      networkType: [Object],
      immutableReferences: [Object],
      generatedSources: [Object],
      deployedGeneratedSources: [Object],
      db: [Object]
    },
    _property_values: {},
    _json: {
      contractName: 'KryptoBird',
      abi: [Array],
      metadata: '{"compiler":{"version":"0.8.11+commit.d7f03943"},"language":"Solidity","output":{"abi":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}],"devdoc":{"kind":"dev","methods":{},"version":1},"userdoc":{"kind":"user","methods":{},"version":1}},"settings":{"compilationTarget":{"project:/Lib.Frontend.Web3/src/contracts/KryptoBirdz.sol":"KryptoBird"},"evmVersion":"byzantium","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":false,"runs":200},"remappings":[]},"sources":{"project:/Lib.Frontend.Web3/src/contracts/KryptoBirdz.sol":{"keccak256":"0xe1653ba472e5289e9f71d17ea6b5dc72663ff9fde802501cb45b2c728ec352a3","license":"MIT","urls":["bzz-raw://71d2d7833b2619aa821149353d74a88ce10049d3891837b056808dcb003feae4","dweb:/ipfs/QmZtKHyRrP5jw1TPGsQTp8BRFcHtyckfmUrw35Nbo4qrfW"]}},"version":1}',
      bytecode: '0x608060405234801561001057600080fd5b506040518060400160405280600a81526020017f4b727970746f42697264000000000000000000000000000000000000000000008152506000908051906020019061005c9291906100ae565b506040518060400160405280600681526020017f4b424952445a0000000000000000000000000000000000000000000000000000815250600190805190602001906100a89291906100ae565b506101b2565b8280546100ba90610180565b90600052602060002090601f0160209004810192826100dc5760008555610123565b82601f106100f557805160ff1916838001178555610123565b82800160010185558215610123579182015b82811115610122578251825591602001919060010190610107565b5b5090506101309190610134565b5090565b5b8082111561014d576000816000905550600101610135565b5090565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061019857607f821691505b602082108114156101ac576101ab610151565b5b50919050565b610302806101c16000396000f3fe608060405234801561001057600080fd5b5060043610610053576000357c01000000000000000000000000000000000000000000000000000000009004806306fdde031461005857806395d89b4114610076575b600080fd5b610060610094565b60405161006d9190610249565b60405180910390f35b61007e610122565b60405161008b9190610249565b60405180910390f35b600080546100a19061029a565b80601f01602080910402602001604051908101604052809291908181526020018280546100cd9061029a565b801561011a5780601f106100ef5761010080835404028352916020019161011a565b820191906000526020600020905b8154815290600101906020018083116100fd57829003601f168201915b505050505081565b6001805461012f9061029a565b80601f016020809104026020016040519081016040528092919081815260200182805461015b9061029a565b80156101a85780601f1061017d576101008083540402835291602001916101a8565b820191906000526020600020905b81548152906001019060200180831161018b57829003601f168201915b505050505081565b600081519050919050565b600082825260208201905092915050565b60005b838110156101ea5780820151818401526020810190506101cf565b838111156101f9576000848401525b50505050565b6000601f19601f8301169050919050565b600061021b826101b0565b61022581856101bb565b93506102358185602086016101cc565b61023e816101ff565b840191505092915050565b600060208201905081810360008301526102638184610210565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806102b257607f821691505b602082108114156102c6576102c561026b565b5b5091905056fea2646970667358221220182934ddcbc19d63d7cb3b1984be1646fe1b9c47eb358d351e7a62c7e5e6b24e64736f6c634300080b0033',
      deployedBytecode: '0x608060405234801561001057600080fd5b5060043610610053576000357c01000000000000000000000000000000000000000000000000000000009004806306fdde031461005857806395d89b4114610076575b600080fd5b610060610094565b60405161006d9190610249565b60405180910390f35b61007e610122565b60405161008b9190610249565b60405180910390f35b600080546100a19061029a565b80601f01602080910402602001604051908101604052809291908181526020018280546100cd9061029a565b801561011a5780601f106100ef5761010080835404028352916020019161011a565b820191906000526020600020905b8154815290600101906020018083116100fd57829003601f168201915b505050505081565b6001805461012f9061029a565b80601f016020809104026020016040519081016040528092919081815260200182805461015b9061029a565b80156101a85780601f1061017d576101008083540402835291602001916101a8565b820191906000526020600020905b81548152906001019060200180831161018b57829003601f168201915b505050505081565b600081519050919050565b600082825260208201905092915050565b60005b838110156101ea5780820151818401526020810190506101cf565b838111156101f9576000848401525b50505050565b6000601f19601f8301169050919050565b600061021b826101b0565b61022581856101bb565b93506102358185602086016101cc565b61023e816101ff565b840191505092915050565b600060208201905081810360008301526102638184610210565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806102b257607f821691505b602082108114156102c6576102c561026b565b5b5091905056fea2646970667358221220182934ddcbc19d63d7cb3b1984be1646fe1b9c47eb358d351e7a62c7e5e6b24e64736f6c634300080b0033',
      immutableReferences: {},
      generatedSources: [Array],
      deployedGeneratedSources: [Array],
      sourceMap: '66:156:0:-:0;;;143:77;;;;;;;;;;167:19;;;;;;;;;;;;;;;;;:4;:19;;;;;;;;;;;;:::i;:::-;;196:17;;;;;;;;;;;;;;;;;:6;:17;;;;;;;;;;;;:::i;:::-;;66:156;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;7:180:2:-;55:77;52:1;45:88;152:4;149:1;142:15;176:4;173:1;166:15;193:320;237:6;274:1;268:4;264:12;254:22;;321:1;315:4;311:12;342:18;332:81;;398:4;390:6;386:17;376:27;;332:81;460:2;452:6;449:14;429:18;426:38;423:84;;;479:18;;:::i;:::-;423:84;244:269;193:320;;;:::o;66:156:0:-;;;;;;;',
      deployedSourceMap: '66:156:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;92:18;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;116:20;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;92:18;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;116:20::-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;7:99:2:-;59:6;93:5;87:12;77:22;;7:99;;;:::o;112:169::-;196:11;230:6;225:3;218:19;270:4;265:3;261:14;246:29;;112:169;;;;:::o;287:307::-;355:1;365:113;379:6;376:1;373:13;365:113;;;464:1;459:3;455:11;449:18;445:1;440:3;436:11;429:39;401:2;398:1;394:10;389:15;;365:113;;;496:6;493:1;490:13;487:101;;;576:1;567:6;562:3;558:16;551:27;487:101;336:258;287:307;;;:::o;600:102::-;641:6;692:2;688:7;683:2;676:5;672:14;668:28;658:38;;600:102;;;:::o;708:364::-;796:3;824:39;857:5;824:39;:::i;:::-;879:71;943:6;938:3;879:71;:::i;:::-;872:78;;959:52;1004:6;999:3;992:4;985:5;981:16;959:52;:::i;:::-;1036:29;1058:6;1036:29;:::i;:::-;1031:3;1027:39;1020:46;;800:272;708:364;;;;:::o;1078:313::-;1191:4;1229:2;1218:9;1214:18;1206:26;;1278:9;1272:4;1268:20;1264:1;1253:9;1249:17;1242:47;1306:78;1379:4;1370:6;1306:78;:::i;:::-;1298:86;;1078:313;;;;:::o;1397:180::-;1445:77;1442:1;1435:88;1542:4;1539:1;1532:15;1566:4;1563:1;1556:15;1583:320;1627:6;1664:1;1658:4;1654:12;1644:22;;1711:1;1705:4;1701:12;1732:18;1722:81;;1788:4;1780:6;1776:17;1766:27;;1722:81;1850:2;1842:6;1839:14;1819:18;1816:38;1813:84;;;1869:18;;:::i;:::-;1813:84;1634:269;1583:320;;;:::o',
      source: '// SPDX-License-Identifier: MIT\n' +
        'pragma solidity >=0.4.22 <0.9.0;\n' +
        '\n' +
        'contract KryptoBird {\n' +
        '    string public name;\n' +
        '    string public symbol;\n' +
        '\n' +
        '    constructor() {\n' +
        "        name = 'KryptoBird';\n" +
        "        symbol = 'KBIRDZ';\n" +
        '    }\n' +
        '}\n',
      sourcePath: '/Users/ericaska/Desktop/MYOWN/playground-nft-marketplace/Lib.Frontend.Web3/src/contracts/KryptoBirdz.sol',
      ast: [Object],
      legacyAST: [Object],
      compiler: [Object],
      networks: [Object],
      schemaVersion: '3.4.4',
      updatedAt: '2021-12-30T00:43:27.005Z',
      networkType: 'ethereum',
      devdoc: [Object],
      userdoc: [Object],
      db: undefined
    },
    configureNetwork: [Function: bound configureNetwork],
    setProvider: [Function: bound setProvider],
    new: [Function: bound new] {
      estimateGas: [Function: bound estimateDeployment],
      request: [Function: bound requestDeployment]
    },
    at: [Function: bound at] AsyncFunction,
    deployed: [Function: bound deployed] AsyncFunction,
    defaults: [Function: bound defaults],
    hasNetwork: [Function: bound hasNetwork],
    isDeployed: [Function: bound isDeployed],
    detectNetwork: [Function: bound detectNetwork] AsyncFunction,
    setNetwork: [Function: bound setNetwork],
    setNetworkType: [Function: bound setNetworkType],
    setWallet: [Function: bound setWallet],
    resetAddress: [Function: bound resetAddress],
    link: [Function: bound link],
    clone: [Function: bound clone],
    addProp: [Function: bound addProp],
    toJSON: [Function: bound toJSON],
    decodeLogs: [Function: bound decodeLogs],
    enums: {},
    class_defaults: { from: '0xFcBaBbA56CdE9a1C1cAc343f076C891267841E2B' },
    interfaceAdapter: Web3InterfaceAdapter { web3: [Web3Shim] },
    web3: Web3Shim {
      currentProvider: [Getter/Setter],
      _requestManager: [RequestManager],
      givenProvider: null,
      providers: [Object],
      _provider: [HttpProvider],
      setProvider: [Function (anonymous)],
      setRequestManager: [Function (anonymous)],
      BatchRequest: [Function: bound Batch],
      extend: [Function],
      version: '1.5.3',
      utils: [Object],
      eth: [Eth],
      shh: [Shh],
      bzz: [Bzz],
      networkType: 'ethereum'
    },
    currentProvider: HttpProvider {
      withCredentials: false,
      timeout: 0,
      headers: undefined,
      agent: undefined,
      connected: true,
      host: 'http://127.0.0.1:7545',
      httpAgent: [Agent],
      send: [Function (anonymous)],
      _alreadyWrapped: true
    },
    network_id: '5777',
    disableConfirmationListener: undefined,
    ens: { enabled: false, registryAddress: null }
  },
  methods: {
    'name()': [Function (anonymous)] {
      call: [Function (anonymous)],
      sendTransaction: [Function (anonymous)],
      estimateGas: [Function (anonymous)],
      request: [Function (anonymous)]
    },
    'symbol()': [Function (anonymous)] {
      call: [Function (anonymous)],
      sendTransaction: [Function (anonymous)],
      estimateGas: [Function (anonymous)],
      request: [Function (anonymous)]
    }
  },
  abi: [
    {
      inputs: [],
      stateMutability: 'nonpayable',
      type: 'constructor',
      constant: undefined,
      payable: undefined
    },
    {
      inputs: [],
      name: 'name',
      outputs: [Array],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      payable: undefined,
      signature: '0x06fdde03'
    },
    {
      inputs: [],
      name: 'symbol',
      outputs: [Array],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      payable: undefined,
      signature: '0x95d89b41'
    }
  ],
  address: '0xBa0326c80E0c2299DDbACAb406542CF87B094E16',
  transactionHash: undefined,
  contract: Contract {
    setProvider: [Function (anonymous)],
    currentProvider: [Getter/Setter],
    _requestManager: RequestManager {
      provider: [HttpProvider],
      providers: [Object],
      subscriptions: Map(0) {}
    },
    givenProvider: null,
    providers: {
      WebsocketProvider: [Function: WebsocketProvider],
      HttpProvider: [Function: HttpProvider],
      IpcProvider: [Function: IpcProvider]
    },
    _provider: HttpProvider {
      withCredentials: false,
      timeout: 0,
      headers: undefined,
      agent: undefined,
      connected: true,
      host: 'http://127.0.0.1:7545',
      httpAgent: [Agent],
      send: [Function (anonymous)],
      _alreadyWrapped: true
    },
    setRequestManager: [Function (anonymous)],
    BatchRequest: [Function: bound Batch],
    extend: [Function: ex] {
      formatters: [Object],
      utils: [Object],
      Method: [Function: Method]
    },
    clearSubscriptions: [Function (anonymous)],
    options: { address: [Getter/Setter], jsonInterface: [Getter/Setter] },
    handleRevert: [Getter/Setter],
    defaultCommon: [Getter/Setter],
    defaultHardfork: [Getter/Setter],
    defaultChain: [Getter/Setter],
    transactionPollingTimeout: [Getter/Setter],
    transactionConfirmationBlocks: [Getter/Setter],
    transactionBlockTimeout: [Getter/Setter],
    defaultAccount: [Getter/Setter],
    defaultBlock: [Getter/Setter],
    methods: {
      name: [Function: bound _createTxObject],
      '0x06fdde03': [Function: bound _createTxObject],
      'name()': [Function: bound _createTxObject],
      symbol: [Function: bound _createTxObject],
      '0x95d89b41': [Function: bound _createTxObject],
      'symbol()': [Function: bound _createTxObject]
    },
    events: { allEvents: [Function: bound ] },
    _address: '0xBa0326c80E0c2299DDbACAb406542CF87B094E16',
    _jsonInterface: [ [Object], [Object], [Object] ]
  },
  name: [Function (anonymous)] {
    call: [Function (anonymous)],
    sendTransaction: [Function (anonymous)],
    estimateGas: [Function (anonymous)],
    request: [Function (anonymous)]
  },
  symbol: [Function (anonymous)] {
    call: [Function (anonymous)],
    sendTransaction: [Function (anonymous)],
    estimateGas: [Function (anonymous)],
    request: [Function (anonymous)]
  },
  sendTransaction: [Function (anonymous)],
  send: [Function (anonymous)],
  allEvents: [Function (anonymous)],
  getPastEvents: [Function (anonymous)]
}

```

## Generate a library

Run `nx g @nrwl/angular:lib my-lib --directory=$PWD` to generate a library.

# FullstackEricaskari

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Extensible Build Framework**

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects
as well.

Below are our core plugins:

- [React](https://reactjs.org)
    - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
    - `npm install --save-dev @nrwl/web`
- [Angular](https://angular.io)
    - `npm install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
    - `npm install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
    - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
    - `npm install --save-dev @nrwl/node`

There are also many [community plugins](https://nx.dev/community) you could add.

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@fullstack-ericaskari/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you
change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `_dist/` directory. Use
the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

## ☁ Nx Cloud

### Distributed Computation Caching & Distributed Task Execution

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that
are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s
advanced code generation and project dependency graph, plus a unified experience for both frontend and backend
developers.

Visit [Nx Cloud](https://nx.app/) to learn more.
