import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminPage = () => {
    const [apiType, setApiType] = useState("partners");
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [avatarFile, setAvatarFile] = useState(null);
    const [logoFile, setLogoFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [editId, setEditId] = useState(null);
    const [items, setItems] = useState([]);

    const apiUrls = {
        partners: "https://6966074bf6de16bde44be3ee.mockapi.io/partners",
        alicilar: "https://6966074bf6de16bde44be3ee.mockapi.io/alicilar",
    };

    const fileToBase64 = (file) =>
        new Promise((resolve, reject) => {
            if (!file) return resolve(null);
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
        });

    useEffect(() => {
        fetchItems();
    }, [apiType]);

    const fetchItems = async () => {
        const res = await axios.get(apiUrls[apiType]);
        setItems(res.data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name) return alert("Adı daxil edin");
        if (apiType === "partners" && !desc) return alert("Təsviri daxil edin");

        try {
            setLoading(true);

            const avatarBase64 = await fileToBase64(avatarFile);
            const logoBase64 = await fileToBase64(logoFile);

            let data =
                apiType === "partners"
                    ? { name, desc }
                    : { name };

            if (avatarBase64) data.avatar = avatarBase64;
            if (logoBase64) data.logo = logoBase64;

            let res;
            if (editId) {
                res = await axios.put(`${apiUrls[apiType]}/${editId}`, data);
                setItems(items.map((i) => (i.id === editId ? res.data : i)));
            } else {
                res = await axios.post(apiUrls[apiType], data);
                setItems([...items, res.data]);
            }

            setName("");
            setDesc("");
            setAvatarFile(null);
            setLogoFile(null);
            setEditId(null);
        } catch (err) {
            console.error(err);
            alert("API əməliyyatı uğursuz oldu!");
        } finally {
            setLoading(false);
        }
    };

    const handleEditClick = (item) => {
        setEditId(item.id);
        setName(item.name);
        setDesc(item.desc || "");
        setAvatarFile(null);
        setLogoFile(null);
    };

    return (
        <div style={{ padding: 20 }}>
            <h2>Admin Page</h2>

            <label>
                <input
                    type="radio"
                    checked={apiType === "partners"}
                    onChange={() => setApiType("partners")}
                />
                Partners
            </label>

            <label style={{ marginLeft: 20 }}>
                <input
                    type="radio"
                    checked={apiType === "alicilar"}
                    onChange={() => setApiType("alicilar")}
                />
                Alicilar
            </label>

            <form onSubmit={handleSubmit} style={{ marginTop: 20 }}>
                <input
                    placeholder="Ad"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br /><br />

                {apiType === "partners" && (
                    <>
                        <input
                            placeholder="Təsvir"
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                        />
                        <br /><br />
                    </>
                )}

                <input type="file" onChange={(e) => setAvatarFile(e.target.files[0])} />
                <br /><br />

                {apiType === "alicilar" && (
                    <>
                        <input type="file" onChange={(e) => setLogoFile(e.target.files[0])} />
                        <br /><br />
                    </>
                )}

                <button disabled={loading}>
                    {editId ? "Yenilə" : "Əlavə et"}
                </button>
            </form>

            <h3>Mövcud Məlumatlar</h3>
            <ul>
                {items.map((i) => (
                    <li key={i.id}>
                        <strong>{i.name}</strong>
                        {i.desc && <> – {i.desc}</>}
                        <br />

                        {i.avatar && (
                            <img src={i.avatar} alt="" width={50} />
                        )}

                        {i.logo && (
                            <img src={i.logo} alt="" width={50} />
                        )}

                        <br />
                        <button onClick={() => handleEditClick(i)}>Redaktə et</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminPage;
