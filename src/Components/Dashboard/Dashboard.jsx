import React, { useState, useEffect } from "react";

function Dashboard() {
  const [news, setNews] = useState("");
  const [image, setImage] = useState(null);
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // دریافت اطلاعات کاربر از Local Storage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    } else {
      alert("Please log in first!");
    }
  }, []);

  const handleNewsSubmit = async (e) => {
    e.preventDefault();

    if (!news) {
      alert("Please write some news.");
      return;
    }

    const formData = new FormData();
    formData.append("user_id", user.id); // آی‌دی کاربر
    formData.append("username", user.username); // نام کاربری
    formData.append("news_content", news); // متن خبر
    if (image) {
      formData.append("image", image); // تصویر
    }

    try {
      const response = await fetch("http://localhost:8888/Express.php", {
        method: "POST",
        body: formData,
      });

      // بررسی وضعیت پاسخ (status code)
      console.log("Response Status:", response.status);

      // بررسی وضعیت پاسخ
      if (!response.ok) {
        setMessage(`خطا: ${response.status} - ${response.statusText}`);
        return;
      }

      // خواندن پاسخ به‌صورت متن
      const text = await response.text();
      let data;
      try {
        data = JSON.parse(text); // سعی می‌کنیم آن را به JSON تبدیل کنیم
      } catch (error) {
        console.error("پاسخ دریافتی JSON معتبر نیست:", error);
        setMessage("پاسخ سرور معتبر نیست. احتمالاً مشکلی در سرور وجود دارد.");
        return;
      }

      // در صورتی که پاسخ JSON معتبر باشد
      if (data) {
        setMessage(data.message || "خبر با موفقیت ارسال شد!");
        setNews("");
        setImage(null);
      } else {
        setMessage("پاسخ سرور مناسب نبود.");
      }
    } catch (error) {
      console.error("خطا در ارسال خبر:", error);
      setMessage("مشکلی پیش آمد. لطفاً دوباره تلاش کنید.");
    }
  };

  return (
    <div className="dashboard-container">
      {user && (
        <>
          <nav className="navbar">
            <span>
              خوش آمدید، {user.username} ({user.email})
            </span>
          </nav>
          <div className="news-form">
            <h3>نوشتن خبر</h3>
            <form onSubmit={handleNewsSubmit}>
              <textarea
                placeholder="خبر خود را اینجا بنویسید..."
                value={news}
                onChange={(e) => setNews(e.target.value)}
                rows="5"
              ></textarea>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
              />
              <button type="submit">ارسال خبر</button>
            </form>
            {message && <p>{message}</p>}
          </div>
        </>
      )}
    </div>
  );
}

export default Dashboard;
