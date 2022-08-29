import './App.css'
import Layout from './layout.js'
import './contracts/Token.json'
function App() {
  const POSP = document.getElementById('POSP')
  const TAM = document.getElementById('TAM')

  return (
    <Layout>
      <div className='App'>
        <img src='./images/milkyway.jpg' alt='' />
        <header className='container-2'>
          <p>
            <h1>Engaging Blockchain Technology</h1>
            <h2>Shaping Industries Of The Future</h2>
            <h4 className='h4-p'>
              decentralized Noah is a blockchain platform offering various use
              cases supporting current industries in transition to Decentralized
              Blockchain Technology. Endless possibilities towards positive
              global change through integration of services.
            </h4>
            <button>Discover deNoah</button>
          </p>
          <div className='c2-b'>
            <a
              className='App-link'
              href='https://reactjs.org'
              target='_blank'
              rel='noopener noreferrer'
            >
              DeFi
            </a>
            <a
              className='App-link'
              href='https://reactjs.org'
              target='_blank'
              rel='noopener noreferrer'
            >
              NFT <br />
              (Non-Fungible Tokens)
            </a>
            <a
              className='App-link'
              href='https://reactjs.org'
              target='_blank'
              rel='noopener noreferrer'
            >
              PMS <br />
              (Property Management System)
            </a>
            <a
              className='App-link'
              href='https://reactjs.org'
              target='_blank'
              rel='noopener noreferrer'
            >
              Enterprise
            </a>
          </div>
        </header>
        <div>
          <header className='container-3'>
            <img src='.\images\futuristic-factory.jpg' alt='' />
            <div>
              <h1 className='c3h1'>Inter-Galactic Aspirations</h1>
              <h3 className='c3h2'>To The World Of Mars, Titan & Beyond</h3>
            </div>
            <div className='c3h4-p'>
              <h4>
                deNoah is a proof-of-stake blockchain platform offering a
                multitude of competent services catering to all aspects of our
                daily lives. A combination of secure, sustainable and advanced
                decentralized applications, protocols and environments.
              </h4>
              <h4>
                Recognized team of leaders distributing convenience through
                enabling structures for transitioning into the economy of the
                future.
              </h4>
              <div>
                <h2>
                  Future Of Inter-Galactic Possibilities, <br />
                  Revolutionizing Economies{' '}
                </h2>
                <button>Overview</button>
              </div>
            </div>
          </header>

          <div className='container-4'>
            <button onClick={'POSP'} className='c4i1'>
              Proof-of-Stake Protocol
            </button>
            <button onClick={'TAM'} className='c4i1'>
              Technologically Advanced Methods
            </button>
            <div className='c4iframe' id='POSP'>
              <h2>Proof-of-Stake Protocol</h2>
              <p>
                A more scalable and low energy consumering blockchain with
                higher throughput of transactions and self staking mechanism.
              </p>
            </div>
            <div className='c4iframe' id='TAM'>
              <h2>Technologically Advanced Methods</h2>
              <p>Zero Knowledge Proof Roll-ups aka ZK RollUps.</p>
            </div>

            <div>
              <button>Indulge into Eco-System</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default App
