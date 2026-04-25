const formatDate = (date) => {
    if (!date) return "";
    const d = new Date(date);
    return isNaN(d) ? "" : d.toISOString().slice(0, 10);
};

export default formatDate;