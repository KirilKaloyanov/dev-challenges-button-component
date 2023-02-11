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
        <Button label='Default' />

        <div className={styles.label}>&lt;Button variant="outline" /&gt;</div>
        <Button label='Default' variant='outline'/>

        <div className={styles.label}>&lt;Button variant="text" /&gt;</div>
        <Button label='Default' variant='text'/>

        <div className={styles.label}>&lt;Button disableShadow /&gt;</div>
        <Button label='Default' disableShadow/>

        <div className={styles.smGrid}>
          <div>
            <div className={styles.label}>&lt;Button disabled /&gt;</div>
            <Button label='Default' disabled />
          </div>
          <div>
            <div className={styles.label}>&lt;Button variant="text" disabled /&gt;</div>
            <Button label='Default' variant="text" disabled />
          </div>
        </div>

        <div className={styles.mdGrid}>
          <div>
            <div className={styles.label}>&lt;Button startIcon=”local_grocery_store” /&gt;</div>
            <Button label='Default' color="Primary" startIcon="add_shopping_cart"/>
          </div>
          <div>
            <div className={styles.label}>&lt;Button endIcon=”local_grocery_store” /&gt;</div>
            <Button label='Default' color="Primary" endIcon="local_grocery_store"/>
          </div>
        </div>

        <div className={styles.grid}>
          <div>
            <div className={styles.label}>&lt;Button size="sm"/&gt;</div>
            <Button label='Default'  color="Primary" size="sm" />
          </div>
          <div>
            <div className={styles.label}>&lt;Button size="md"/&gt;</div>
            <Button label='Default'  color="Primary"/>
          </div>
          <div>
            <div className={styles.label}>&lt;Button size="lg"/&gt;</div>
            <Button label='Default'  color="Primary" size="lg"/>
          </div>
          <div></div>
          
          <div>
            <div className={styles.label}>&lt;Button color="Default"/&gt;</div>
            <Button label='Default' color="Default"/>
          </div>
          <div>
            <div className={styles.label}>&lt;Button color="Primary"/&gt;</div>
            <Button label='Default' color="Primary"/>
          </div>
          <div>
            <div className={styles.label}>&lt;Button color="Secondary"/&gt;</div>
            <Button label='Secondary' color="Secondary"/>
          </div>
          <div>
            <div className={styles.label}>&lt;Button color="Danger"/&gt;</div>
            <Button label='Danger' color="Danger"/>
          </div>

        </div>

        <footer><a href="https://devchallenges.io/portfolio/KirilKaloyanov" target={'_blank'} rel="noreferrer">created by <strong>KirilKaloyanov</strong> - devChallenges.io</a></footer>
      </div>
    </div>
  );
}

export default App;
