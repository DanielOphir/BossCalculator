import './Boss.css'
import { IBoss } from "../../models/interface/Boss.interface";
import { ChangeEvent, FormEvent, useState } from 'react';
// import BossPartySize from './BossPartySize/BossPartySize';
import { BossDifficulty } from '../../models/enum/BossDifficulty.enum';
import { useEffect } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import Select from 'react-select';

type BossProps = {
  onInputCheck: Function;
} & IBoss

const Boss = ({ costs, difficulties, name, iconSrc, id, onInputCheck }: BossProps) => {

  const [checked, setChecked] = useState(false);
  const [difficulty, setDifficulty] = useState<BossDifficulty>(difficulties[0])
  const [partySize, setPartySize] = useState<number>(1)

  const onCheckHandler = (event: FormEvent<HTMLInputElement>) => {
    const target: HTMLInputElement = event.target as HTMLInputElement
    setChecked(target.checked);
    onInputCheck(target.checked, id, costs[difficulty]);
  }

  const onPartySizeChangeHandler = (value: number) => {
    setPartySize(value)
  }

  const onSelectDifficultyHandler = (value: any) => {
    setDifficulty(BossDifficulty[value as keyof typeof BossDifficulty]);
  }

  const updateCost = () => {
    onInputCheck(checked, id, costs[difficulty] / partySize);
  }

  useEffect(() => { updateCost() }, [partySize, difficulty])
  return (
    <div className="boss_container">
      <img className='boss_icon' src={iconSrc} alt="" />
      <div className='boss_side_container'>
        <div className="boss_top_container">
        <input type={"checkbox"} onChange={(event) => onCheckHandler(event)} checked={checked} />
          <div className='boss_name'>
            {difficulties.length > 1 ?
            <Select menuPlacement={'auto'} options={difficulties.map(difficulty => ({ label: difficulty, value: difficulty }))}/>
              // <Dropdown  onChange={onSelectDifficultyHandler} />
              : difficulties[0]} {name}
          </div>
        </div>
        {/* {checked && <BossPartySize bossID={id} partySizeChangeHandler={(value: number) => onPartySizeChangeHandler(value)} />} */}
        <div className="boss_bottom_container">
        <Select menuPlacement={'auto'} options={[...Array(6).keys()].map(key => ({label: (key + 1).toString(), value: key + 1}))}/>
            With a party of <Dropdown options={[...Array(6).keys()].map(key => ({label: (key + 1).toString(), value: key + 1}))} onChange={onPartySizeChangeHandler} />
        </div>
      </div>
    </div>
  )
}

export default Boss