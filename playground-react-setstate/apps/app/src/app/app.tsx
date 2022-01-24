import { Component } from 'react';

interface AppState {
  num: number;
}
export class App extends Component<any, AppState>{
  setStateAsync = (state: AppState) => new Promise<void>((resolve) => this.setState(state, resolve));

  state = {
    num: 9
  }

  async onButtonClick() {
    console.log('onButtonClick');
    console.log('before: ', this.state.num);
    await this.setStateAsync({ num: Date.now()});
    // await this.setState({ num: Date.now()}, () => console.log('callback:  1 ', this.state.num));
    // await this.setState({ num: Date.now()}, () => console.log('callback:  2 ', this.state.num));
    console.log('after:  ', this.state.num);
  }

  render() {
    return (
      <div>
        <button onClick={async () => await this.onButtonClick()}>
          {this.state.num}
        </button>
      </div>
    );
  }
}

export default App;
