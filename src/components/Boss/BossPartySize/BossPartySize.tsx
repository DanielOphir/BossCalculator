import './BossPartySize.css'
import useBossPartySize from './useBossPartySize';

type BossPartySizeProps = {
    bossID: string;
}

const BossPartySize = ({ bossID }: BossPartySizeProps) => {

    const { checked, onInputChange } = useBossPartySize();
    
    return (
        <div className='boss_party_size_container'>
            <div>
                <input className="boss_radio_input" onChange={(event) => onInputChange(event)} value={1} checked={checked === "1"} id={bossID + '_1'} type='radio' name={bossID} />
                <label className="boss_radio_label" htmlFor={bossID + '_1'}>1</label>
            </div>
            <div>
                <input className="boss_radio_input" onChange={(event) => onInputChange(event)} value={2} checked={checked === "2"} id={bossID + '_2'} type='radio' name={bossID} />
                <label className="boss_radio_label" htmlFor={bossID + '_2'}>2</label>
            </div>
            <div>
                <input className="boss_radio_input" onChange={(event) => onInputChange(event)} value={3} checked={checked === "3"} id={bossID + '_3'} type='radio' name={bossID} />
                <label className="boss_radio_label" htmlFor={bossID + '_3'}>3</label>
            </div>
            <div>
                <input className="boss_radio_input" onChange={(event) => onInputChange(event)} value={4} checked={checked === "4"} id={bossID + '_4'} type='radio' name={bossID} />
                <label className="boss_radio_label" htmlFor={bossID + '_4'}>4</label>
            </div>
            <div>
                <input className="boss_radio_input" onChange={(event) => onInputChange(event)} value={5} checked={checked === "5"} id={bossID + '_5'} type='radio' name={bossID} />
                <label className="boss_radio_label" htmlFor={bossID + '_5'}>5</label>
            </div>
            <div>
                <input className="boss_radio_input" onChange={(event) => onInputChange(event)} value={6} checked={checked === "6"} id={bossID + '_6'} type='radio' name={bossID} />
                <label className="boss_radio_label" htmlFor={bossID + '_6'}>6</label>
            </div>
        </div>
    )
}

export default BossPartySize