import * as styles from './DemoPage.css'
import Logo from '@/assets/logo.svg'
import Log from '@/components/Organisms/Log'
import PlayerInfo from '@/components/Organisms/PlayerInfo'
import Player from '@/components/Organisms/Player'
import Graph from '@/components/Organisms/Graph'

import StreamSelectForm from '@/components/Molecules/StreamSelectForm'
import classNames from '@/utils/classNames'
import CustomStreamForm from '@/components/Molecules/CustomStreamForm'
import { formsContainer } from './DemoPage.css'

const DemoPage = () => {
  return (
    <>
      <div className={classNames(styles.row, styles.rowT)}>
        <div className={styles.infoSegment}>
          <div className={styles.content}>
            <img src={Logo} className={styles.logo} alt="" />
          </div>
          <div>
            <p>
              Do you want to get started with the player. Please review our{' '}
              <a href="https://docs.liveryvideo.com/">documentation</a>.
            </p>
            <p>Select one of the test streams to test functions and performance using the Livery player.</p>
          </div>
          <div className={styles.formsContainer}>
            <StreamSelectForm />
            <CustomStreamForm />
          </div>
        </div>
        <div className={styles.playerSegment}>
          <PlayerInfo title={'Livery demo stream'} />
          <div className={styles.playerContainer}>
            <Player />
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.logSegment}>
          <Log />
        </div>
        <Graph className={styles.graphSegment} />
      </div>
    </>
  )
}

export default DemoPage
