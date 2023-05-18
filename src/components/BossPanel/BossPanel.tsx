import { useEffect, useState } from "react"
import { IBoss } from "../../models/interface/Boss.interface"
import useBossPanel from "./useBossPanel";
import Boss from "../Boss/Boss";
import './BossPanel.css'

const BossPanel = () => {

  const [bosses, setBosses] = useState<IBoss[]>([]);

  const { handleInputCheck, mesoSum } = useBossPanel(bosses);

  useEffect(() => {
    fetch("data/data.json")
    .then(rawData => rawData.json())
    .then(data => setBosses(data))
  }, [])

  return (
    <div className="boss_panel">
    <div className="collector_container">
    Mesos: {mesoSum.toLocaleString()}
    </div>
    <div className="bosses_container">
      {
        bosses.map(boss => (
          <Boss key={boss.id} onInputCheck={handleInputCheck} {...boss} />
        ))
      }
    </div>
    </div>
  )
}

export default BossPanel