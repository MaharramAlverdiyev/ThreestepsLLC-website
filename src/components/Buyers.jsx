import React, { useState, useEffect } from "react";
import axios from "axios";

const API = "https://6966074bf6de16bde44be3ee.mockapi.io/alicilar";

const Buyers = () => {
    const [buyers, setBuyers] = useState([]);
    const [form, setForm] = useState({ company: "", name: "", avatars: [""] });
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        axios.get(API).then(res => setBuyers(res.data));
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleAvatarChange = (e, index) => {
        const newAvatars = [...form.avatars];
        newAvatars[index] = e.target.value;
        setForm({ ...form, avatars: newAvatars });
    };

    const addAvatarField = () => {
        setForm({ ...form, avatars: [...form.avatars, ""] });
    };

    const handleSubmit = async () => {
        if (editId) {
            const res = await axios.put(`${API}/${editId}`, form);
            setBuyers(buyers.map(b => b.id === editId ? res.data : b));
            setEditId(null);
        } else {
            const res = await axios.post(API, form);
            setBuyers([...buyers, res.data]);
        }
        setForm({ company: "", name: "", avatars: [""] });
    };

    const handleEdit = (b) => {
        setForm({
            company: b.company,
            name: b.name,
            avatars: b.avatars && b.avatars.length ? b.avatars : [""]
        });
        setEditId(b.id);
    };

    return (
        <div>
            <h2>Alıcılar</h2>

            <input
                name="company"
                placeholder="Company"
                value={form.company}
                onChange={handleChange}
            />

            <input
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
            />

            <h4>Avatars (link)</h4>
            {form.avatars.map((url, i) => (
                <input
                    key={i}
                    placeholder="Avatar URL"
                    value={url}
                    onChange={(e) => handleAvatarChange(e, i)}
                />
            ))}
            <button onClick={addAvatarField}>+ Daha Avatar</button>

            <button onClick={handleSubmit}>
                {editId ? "Dəyişdir" : "Əlavə et"}
            </button>

            <hr />

            {buyers.map(b => (
                <div key={b.id}>
                    {b.avatars && b.avatars.map((url, i) => (
                        <img key={i} src={url} width="50" alt="avatar" />
                    ))}
                    <div>{b.company} - {b.name}</div>
                    <button onClick={() => handleEdit(b)}>Edit</button>
                </div>
            ))}
        </div>
    );
};

export default Buyers;