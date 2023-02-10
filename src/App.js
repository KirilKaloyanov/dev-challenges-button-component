import Button from './buttonComponent.js';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <div>
        <aside>
          <header>
            <span>Dev</span>Challenges
          </header>
          <div>Colors</div>
          <div>Typography</div>
          <div>Spaces</div>
          <div className={styles.activeText}>Buttons</div>
          <div>Inputs</div>
          <div>Grid</div>
        </aside>
      </div>
      <div>
        <div className={styles.label}>&lt;Button /&gt;</div>
        <Button />
        <div className={styles.label}>&lt;Button variant='outline' /&gt;</div>
        <Button variant='outline'/>
        <div className={styles.label}>&lt;Button variant='text' /&gt;</div>
        <Button variant='text'/>
        <div className={styles.label}>&lt;Button disableShadow /&gt;</div>
        <Button disableShadow/>
        <footer><a href="https://devchallenges.io/portfolio/KirilKaloyanov" target={'_blank'} rel="noreferrer">created by <strong>KirilKaloyanov</strong> - devChallenges.io</a></footer>
      </div>
    </div>
  );
}

export default App;
