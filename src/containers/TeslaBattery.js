import React, {Component} from 'react';
import './TeslaBattery.css';
import TeslaNotice from '../components/TeslaNotice/TeslaNotice';
import TeslaCar from '../components/TeslaCar/TeslaCar';

export default class TeslaBattery extends Component {
  render() {
    return (
      <form className="tesla-battery">
        <h1>Range per Change</h1>
        <TeslaCar wheelSize={19}/>
        <TeslaNotice />
      </form>
    )
  }
}
