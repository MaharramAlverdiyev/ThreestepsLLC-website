import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminPage = () => {
    const [apiType, setApiType] = useState("partners"); // partners / alicilar
    const [name, setName] = useState("");
    const [desc, setDesc] = useState(""); // partners üçün
    const [avatarFile, setAvatarFile] = useState(null);
    const [logoFile, setLogoFile] = useState(null); // alicilar üçün
    const [loading, setLoading] = useState(false);
    const [editId, setEditId] = useState(null);
    const [items, setItems] = useState([]);

    const apiUrls = {
        partners: "https://6966074bf6de16bde44be3ee.mockapi.io/partners",
        alicilar: "https://6966074bf6de16bde44be3ee.mockapi.io/alicilar",
    };

    // Faylı Base64 formatına çevirir
    const fileToBase64 = (file) =>
        new Promise((resolve, reject) => {
            if (!file) return resolve("");
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (err) => reject(err);
        });

    useEffect(() => {
        fetchItems();
    }, [apiType]);

    const fetchItems = async () => {
        try {
            const res = await axios.get(apiUrls[apiType]);
            setItems(res.data);
        } catch (err) {
            console.error(err);
            alert("Məlumat yüklənmədi!");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name) return alert("Adı daxil edin");
        if (apiType === "partners" && !desc) return alert("Təsviri daxil edin");

        try {
            setLoading(true);

            // Faylları Base64-ə çeviririk
            const avatarBase64 = await fileToBase64(avatarFile);
            const logoBase64 = await fileToBase64(logoFile);

            let data = {};
            if (apiType === "partners") {
                data = { name, desc, avatar: avatarBase64 };
            } else {
                data = { name, avatar: avatarBase64, logo: logoBase64 };
            }

            let res;
            if (editId) {
                res = await axios.put(`${apiUrls[apiType]}/${editId}`, data);
                setItems(items.map((i) => (i.id === editId ? res.data : i)));
                alert("Məlumat yeniləndi!");
            } else {
                res = await axios.post(apiUrls[apiType], data);
                setItems([...items, res.data]);
                alert("Yeni məlumat əlavə olundu!");
            }

            // Formu sıfırla
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
        if (apiType === "partners") {
            setDesc(item.desc || "");
            setAvatarFile(null);
        } else {
            setAvatarFile(null);
            setLogoFile(null);
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Admin Page</h2>

            <div style={{ marginBottom: "20px" }}>
                <label>
                    <input
                        type="radio"
                        name="apiType"
                        value="partners"
                        checked={apiType === "partners"}
                        onChange={() => setApiType("partners")}
                    />
                    Partners
                </label>
                <label style={{ marginLeft: "20px" }}>
                    <input
                        type="radio"
                        name="apiType"
                        value="alicilar"
                        checked={apiType === "alicilar"}
                        onChange={() => setApiType("alicilar")}
                    />
                    Alicilar
                </label>
            </div>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Ad"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <br />
                <br />
                {apiType === "partners" && (
                    <>
                        <input
                            type="text"
                            placeholder="Təsvir"
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                            required
                        />
                        <br />
                        <br />
                    </>
                )}
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setAvatarFile(e.target.files[0])}
                />
                <label style={{ marginLeft: "10px" }}>Avatar faylı</label>
                <br />
                <br />
                {apiType === "alicilar" && (
                    <>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setLogoFile(e.target.files[0])}
                        />
                        <label style={{ marginLeft: "10px" }}>Logo faylı</label>
                        <br />
                        <br />
                    </>
                )}
                <button type="submit" disabled={loading}>
                    {loading ? "Əlavə olunur..." : editId ? "Yenilə" : "Əlavə et"}
                </button>
            </form>
            <h3>Mövcud Məlumatlar</h3>
            <ul>
                {items.map((i) => (
                    <li key={i.id} style={{ marginBottom: "15px" }}>
                        <strong>{i.company}</strong>
                        {apiType === "partners" && i.desc && <> - {i.desc}</>}
                        <br />
                        {i.avatar && (
                            <img
                                src={i.avatar}
                                alt="avatar"
                                style={{ width: "50px", marginRight: "10px" }}
                            />
                        )}
                        {apiType === "alicilar" && i.logo && (
                            <img
                                src={i.logo}
                                alt="logo"
                                style={{ width: "50px", marginRight: "10px" }}
                            />
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
