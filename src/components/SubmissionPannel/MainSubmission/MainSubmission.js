import React from 'react';
import InputItem from '../MainSubmission/Items/InputItem';
import Textarea from '../MainSubmission/Items/Textarea';
import RadioChecx from '../MainSubmission/Items/RadioCheckbox';
import Option from '../MainSubmission/Items/Option';
import Button from '../MainSubmission/Items/Button';
import styles from '../../SubmissionPannel/MainSubmission/MainSubmission.module.scss';

class MainSubmission extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   Category: '',
   RaisedOn: '',
   UpdateOn: '',
   Status: 'działa',
   Email: '',
   ImpacedCountries: [],
   ImpacedBuisnesses: '',
   ImpacedEntities: '',
   Attachment: '0',
   Description: '',
   errors: [],
   isValid: false
  };
 }
 handleChange(e) {
  e.preventDefault();
  this.setState({ [e.target.name]: e.target.value });
 }

 matterForm = e => {
  e.preventDefault();
  const {
   Category,
   RaisedOn,
   UpdateOn,
   Status,
   Email,
   ImpacedCountries,
   ImpacedBuisnesses,
   ImpacedEntities,
   Attachment,
   Description
  } = this.state;
  const errors = [];
  if (
   Category.length < 2 &&
   Status.length < 2 &&
   ImpacedCountries.length < 2 &&
   ImpacedEntities.length < 2 &&
   ImpacedBuisnesses.length < 2 &&
   ImpacedEntities.length < 2
  ) {
   errors.push('File must hes at liest 2 letter word');
  }
  if (!Email.includes('@') || Email.trim().length < 3) {
   errors.push('Email must has @ i and at least 5 letter word');
  }
  if (Description.trim().length === 0 && Description.trim().length === 250) {
   errors.push('Description has to be written, but not to long.');
  }
  if (RaisedOn.trim().length < 10 && UpdateOn.trim().length < 10) {
   errors.push('Wrong Date');
  }

  this.setState({ errors });

  if (errors.length === 0) {
   const newMatter = {
    Category,
    RaisedOn,
    UpdateOn,
    Status,
    Email,
    ImpacedCountries,
    ImpacedBuisnesses,
    ImpacedEntities,
    Attachment,
    Description
   };

   fetch('http://localhost:4000/requests', {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json'
    },
    body: JSON.stringify(newMatter)
   })
    .then(response => response.text())
    .catch(error => console.error('Error:', error));
  }
  return errors.length === 0;
 };
 isValid(e) {
  e.preventDefault();
  this.setState({ isValid: this.matterForm() });
 }

 handleCancel() {
  console.log(this.state.Status);
 }
 render() {
  return (
   <main>
    {this.state.isValid && (
     <h1 className={styles.valid}>
      Thank you, all fields have been filled correctly.
     </h1>
    )}
    <ul className={styles.inValid}>
     {this.state.errors.map((error, i) => (
      <li key={i}>{error}</li>
     ))}
    </ul>
    <form className={styles.form__wrapper} onSubmit={e => this.matterForm(e)}>
     <div className={styles.form__d}>
      <InputItem
       category={'Category'}
       type={'text'}
       placeholder={'Category of meetting'}
       name={'Category'}
       value={this.state.Category}
       onChange={e => this.handleChange(e)}
      />
     </div>
     <div className={styles.form__d}>
      <InputItem
       category={'Status'}
       type={'text'}
       placeholder={'Status of meetting'}
       name={'Status'}
       value={this.state.Status}
       onChange={e => this.handleChange(e)}
      />
     </div>
     <div className={styles.form__d}>
      <InputItem
       category={'Author'}
       type={'text'}
       placeholder={'E-mail person responsible for a meeting'}
       name={'Email'}
       value={this.state.Email}
       onChange={e => this.handleChange(e)}
      />
     </div>
     <div className={styles.form__d}>
      <InputItem
       category={'Rise on'}
       type={'date'}
       placeholder={'Starting day of meeting'}
       name={'RaisedOn'}
       value={this.state.RaisedOn}
       onChange={e => this.handleChange(e)}
      />
     </div>
     <div className={styles.form__d}>
      <InputItem
       category={'Update on'}
       type={'date'}
       placeholder={'Close update of matter'}
       name={'UpdateOn'}
       value={this.state.UpdateOn}
       onChange={e => this.handleChange(e)}
      />
     </div>
     <div className={styles.form__d}>
      <InputItem
       category={'Country'}
       type={'text'}
       placeholder={'Impacted Businesses'}
       name={'ImpactedBusinesses'}
       onChange={e => this.handleChange(e)}
      />
     </div>
     <div className={styles.form__textarea}>
      <Textarea
       name={'Description'}
       title={'Description'}
       placeholder={'Dscribe main topic of matter..'}
       onChange={e => this.handleChange(e)}
      />
      <Button type={'button'} title={'Submit'} />
     </div>
     <div className={styles.form__radio}>
      <h2>Choice status</h2>
      <div>
       <RadioChecx
        type={'radio'}
        name={'Status'}
        id={'new'}
        htmlFor={'new'}
        inputValue={'New'}
        onChange={e => this.handleChange(e)}
       />
      </div>
      <div>
       <RadioChecx
        type={'radio'}
        name={'Status'}
        id={'returned'}
        htmlFor={'returned'}
        inputValue={'Returned'}
        onChange={e => this.handleChange(e)}
       />
      </div>
     </div>
     <div className={styles.form__radio}>
      <h2>Impacted Countries</h2>
      <div>
       <RadioChecx
        type={'checkbox'}
        name={'ImpacedCountries'}
        htmlFor={'australia'}
        inputValue={'Australia'}
        onChange={e => this.handleChange(e)}
       />
      </div>
      <div>
       <RadioChecx
        type={'checkbox'}
        name={'ImpacedCountries'}
        htmlFor={'china'}
        inputValue={'China'}
        onChange={e => this.handleChange(e)}
       />
      </div>
      <div>
       <RadioChecx
        type={'checkbox'}
        name={'ImpacedCountries'}
        htmlFor={'hong-kong'}
        inputValue={'Hong Kong'}
        onChange={e => this.handleChange(e)}
       />
      </div>
      <div>
       <RadioChecx
        type={'checkbox'}
        name={'ImpacedCountries'}
        htmlFor={'indie'}
        inputValue={'India'}
        onChange={e => this.handleChange(e)}
       />
      </div>
     </div>
     <div className={styles.form__attachment}>
      <h2>Attachments</h2>
      <Button type={'button'} title={'View files'} />
      <Button type={'button'} title={'Upload attachments'} />
     </div>
     <div className={styles.form__section}>
      <h2>APAC GC Lead</h2>
      <select name={'APACGCLead'} onChange={e => this.handleChange(e)}>
       <Option value={'Asistent Manager'} title={'Team Leader'} />
       <Option value={'Manager'} title={'Manager'} />
       <Option value={'Generla Manager'} title={'General Manager'} />
      </select>
     </div>
     <div className={styles.form__mainButton}>
      <Button
       type={'button'}
       title={'Cancel'}
       typ="button"
       newPage={this.props.newPage}
      />
      <Button type={'submit'} title={'Save'} />
     </div>
    </form>
   </main>
  );
 }
}

export default MainSubmission;
