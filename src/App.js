
//compoennts
import Sidebar from './layouts/sidebar'
import Header from './layouts/header'
import Dashboard from './pages/dashboard'

//styles
import { Row, Container, Col } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Header />
      <Container className="pt-5">
        <Row className="justify-content-center">
        <Col lg={7}>
            <Dashboard />
          </Col>
          <Col lg={3} className="d-flex flex-column align-items-end text-right mt-5">
            <Sidebar />
          </Col>
         
        </Row>

      </Container>

    </div>
  );
}

export default App;
