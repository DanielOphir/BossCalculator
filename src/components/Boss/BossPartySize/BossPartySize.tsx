// import './BossPartySize.css'
// import useBossPartySize from './useBossPartySize';

// type BossPartySizeProps = {
//     bossID: string;
//     partySizeChangeHandler: Function;
// }

// const BossPartySize = ({ bossID, partySizeChangeHandler }: BossPartySizeProps) => {

//     const { onInputChange } = useBossPartySize(partySizeChangeHandler);

//     const MAX_PARTY_SIZE = 6;

//     return (
//         <div className='boss_party_size_container'>
//             {[...Array(MAX_PARTY_SIZE).keys()].map(index => {
//             const partySize = index + 1
//             return (
//                 <div key={partySize}>
//                     <input className="boss_radio_input" onChange={(event) => onInputChange(event)} value={partySize} checked={value === partySize.toString()} id={bossID + '_' + partySize} type='radio' name={bossID} />
//                     <label className="boss_radio_label" htmlFor={bossID + '_' + partySize}>{partySize}</label>
//                 </div>
//             )})}
//         </div>
//     )
// }

// export default BossPartySize
const BossPartySize = () => {
  return (
    <div>BossPartySize</div>
  )
}
export default BossPartySize