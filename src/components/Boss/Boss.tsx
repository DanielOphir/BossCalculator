import './Boss.css'
import { IBoss } from "../../models/interface/Boss.interface";
import { useState } from 'react';
import BossPartySize from './BossPartySize/BossPartySize';

type BossProps = {
  onInputCheck: Function;
} & IBoss

const Boss = ({ cost, difficulty, name, iconSrc, id, onInputCheck }: BossProps) => {

  return (
    <div>
    <div className="boss_container">
      <img className='boss_icon' src={iconSrc} alt="" />
      <div>
        {difficulty} {name}
      </div>
      <input type={"checkbox"} onInput={(event) => onInputCheck(event, cost)} />
      </div>
      <BossPartySize bossID={id}/>
    </div>
  )
}

export default Boss