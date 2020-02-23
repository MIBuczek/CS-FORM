import React from 'react';
import styles from '../MainItems/MainItems.module.scss';
import ButtonTeam from '../../TeamPannel/MainItems/Items/Button';
import PageCounter from '../../TeamPannel/MainItems/Items/PageCounter';
import Thead from '../../TeamPannel/MainItems/Items/Thead';

class MainItems extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   startPage: 0,
   lastPage: 1,
   dataR: []
  };
 }
 componentDidMount() {
  fetch(`http://localhost:4000/Requests`)
   .then(resp => resp.json())
   .then(resp => {
    resp.map(data => {
     return this.setState({ dataR: [...this.state.dataR, data] });
    });
   });
 }
 componentWillUnmount() {
  this.setState({ dataR: [] });
 }

 handleReloadData = e => {
  this.setState({ dataR: [] });
  e.preventDefault();
  fetch('http://localhost:4000/Requests')
   .then(response => response.json())
   .catch(error => console.error('Error:', error))
   .then(response =>
    response.map(request => {
     return this.setState({ dataR: [...this.state.dataR, request] });
    })
   );
 };

 handleDelateData = id => {
  console.log(id);
  fetch(`http://localhost:4000/Requests/${id}`, { method: 'DELETE' })
   .then(res => res.json())
   .then(res => {
    console.log('Deleted:', res.message);
    return res;
   })
   .catch(err => console.error(err));
 };
 render() {
  return (
   <main className={styles.mainItems}>
    <h1 className={styles.mainItems__h}>My team active items</h1>
    <div className={styles.mainItems__d}>
     <ButtonTeam type={'button'} title={'Sort & Filter'} />
     <ButtonTeam
      type={'button'}
      title={'Reload'}
      onClick={e => this.handleReloadData(e)}
     />
     <ButtonTeam type={'button'} title={'Prepare tabel for export'} />
    </div>
    <div className={styles.mainItems__d}>
     <PageCounter
      startPage={this.state.startPage}
      lastPage={this.state.lastPage}
     />
    </div>
    <table className={styles.mainItems__t}>
     <thead>
      <Thead class={styles.mainItems__tr} />
     </thead>
     <tbody>
      {this.state.dataR.map(request => {
       return (
        <tr key={request.id} className={styles.form__tr}>
         <td>{request.id}</td>
         <td>{request.RaisedOn}</td>
         <td>{request.UpdateOn}</td>
         <td>{request.Status}</td>
         <td>{request.Description}</td>
         <td>{request.Category}</td>
         <td>{request.ImpacedBuisnesses}</td>
         <td>{request.ImpacedCountries}</td>
         <td>{request.ImpacedEntities}</td>
         <td>{request.APACGCLead}</td>
         <td>{request.Attachment}</td>
         <td>{request.Email}</td>
         <td>
          <button
           className={styles.tabelButton}
           onClick={() => this.handleDelateData(request.id)}
          >
           Delete
          </button>
         </td>
        </tr>
       );
      })}
     </tbody>
    </table>
    <div className={styles.mainItems__d}>
     <PageCounter
      startPage={this.state.startPage}
      lastPage={this.state.lastPage}
     />
    </div>
   </main>
  );
 }
}

export default MainItems;
