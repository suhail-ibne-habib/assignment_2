import { useState } from 'react';

function NewPhone(props) {
    const {contact, phones, setPhones} = props;
    const [number, setNumber] = useState('');
    const [phoneType, setPhoneType] = useState('')

    async function createPhone(e) {
        e.preventDefault();

        const response = await fetch('http://localhost/api/contacts/' + contact.id + '/phones', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                number,
                "phone-type": phoneType
            })
        });

        const data = await response.json();

        if (data.id) {
            setPhones([...phones, data]);
        }

        setNumber('');
        setPhoneType('');
    }

	return (
        <form onSubmit={createPhone} onClick={(e) => e.stopPropagation()} className='new-phone'>
            {/* <input type='text' placeholder='Name' onChange={(e) => setName(e.target.value)} value={name}/> */}
            <select onChange={(e) => setPhoneType(e.target.value)} value={phoneType}>
                <option value="home">Home</option>
                <option value="work">Work</option>
                <option value="mobile">Mobile</option>
                <option value="others">Others</option>
            </select>
            <input type='text' placeholder='Phone Number' onChange={(e) => setNumber(e.target.value)} value={number}/>
            <button className='button green' type='submit'>Add Choiru’s Phone</button>
        </form>
	);
}

export default NewPhone;