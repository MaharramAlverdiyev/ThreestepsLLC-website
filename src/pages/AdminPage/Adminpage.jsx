import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPage = ({ addPartner, partners, setPartners }) => {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [editId, setEditId] = useState(null); 

    useEffect(() => {
        axios.get('https://6966074bf6de16bde44be3ee.mockapi.io/partners')
            .then(res => setPartners(res.data))
            .catch(err => console.error(err));
    }, [setPartners]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!file && !editId) return alert('Şəkil seçin');

        const reader = new FileReader();
        reader.onload = async () => {
            const image = reader.result;
            const partnerData = { name, desc, image };

            try {
                setLoading(true);
                let res;
                if (editId) {
                    res = await axios.put(`https://6966074bf6de16bde44be3ee.mockapi.io/partners/${editId}`, partnerData);
                    setPartners(partners.map(p => p.id === editId ? res.data : p));
                    alert('Partner yeniləndi!');
                } else {
                    res = await axios.post('https://6966074bf6de16bde44be3ee.mockapi.io/partners', partnerData);
                    setPartners([...partners, res.data]);
                    alert('Yeni partner əlavə olundu!');
                }

            } catch (err) {
                console.error('API xətası:', err);
                alert('API əməliyyatı uğursuz oldu!');
            } finally {
                setLoading(false);
            }

            setName('');
            setDesc('');
            setFile(null);
            setEditId(null);
        };

        if (file) {
            reader.readAsDataURL(file);
        } else {
            handleEditWithoutFile();
        }
    };

    const handleEditWithoutFile = async () => {
        try {
            setLoading(true);
            const partnerData = { name, desc };
            const res = await axios.put(`https://6966074bf6de16bde44be3ee.mockapi.io/partners/${editId}`, partnerData);
            setPartners(partners.map(p => p.id === editId ? res.data : p));
            alert('Partner yeniləndi!');
        } catch (err) {
            console.error(err);
            alert('API update xətası');
        } finally {
            setLoading(false);
            setName('');
            setDesc('');
            setEditId(null);
        }
    };

    const handleEditClick = (partner) => {
        setEditId(partner.id);
        setName(partner.name);
        setDesc(partner.desc);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Admin Page</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Partner adı"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                /><br /><br />
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setFile(e.target.files[0])}
                /><br /><br />
                <button type="submit" disabled={loading}>
                    {loading ? 'Əlavə olunur...' : editId ? 'Yenilə' : 'Əlavə et'}
                </button>
            </form>

            <h3>Mövcud Partnerlər</h3>
            <ul>
                {partners.map(p => (
                    <li key={p.id} style={{ marginBottom: '10px' }}>
                        <strong>{p.name}</strong> - {p.desc}
                        <button style={{ marginLeft: '10px' }} onClick={() => handleEditClick(p)}>Redaktə et</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminPage;
