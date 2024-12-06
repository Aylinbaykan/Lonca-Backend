# Lonca Back-End

Bu proje, **Lonca** uygulamasının back-end kısmını oluşturur. Uygulama, ürünlerin yönetimi ve detaylarının listelenmesi için bir RESTful API sağlar. MongoDB kullanılarak veri yönetimi yapılır ve Express.js ile bir sunucu oluşturulmuştur.

---

## Özellikler
- Ürün listeleme (GET `/api/products`)
- Tekil ürün detaylarını görüntüleme (GET `/api/products/:id`)
- Ürün veritabanı güncelleme ve yedekleme için **seedData.js** script'i
- **MongoDB Atlas** üzerinde barındırılan veritabanı
- CORS desteği

---

## Kullanılan Teknolojiler
- **Node.js**: v18.20.5 (Önerilen: 14.x ve üzeri) Sunucu tarafı çalıştırma.
- **NPM**: v10.8.2 (Önerilen: 6.x ve üzeri)
- **Express.js**: API oluşturmak için minimal framework.
- **MongoDB**: Veritabanı.
- **Mongoose**: MongoDB ile etkileşim.
- **dotenv**: Çevresel değişken yönetimi.
- **fs**: JSON dosya işlemleri için.

---

## Frontend ile Bağlantı

Bu back-end uygulaması, front-end ile birlikte çalışmak üzere tasarlanmıştır. Aşağıdaki adımları izleyerek front-end uygulamasını back-end sunucusuna bağlayabilirsiniz:

### 1. Back-end sunucusunu çalıştır:
   ```bash
   node server.js
   ```
   Sunucu varsayılan olarak `http://localhost:5000` adresinde çalışır.

### 2. Front-end uygulamasında back-end bağlantısını ayarla:
   - Front-end projesinin `config` dosyasında veya API ayarlarının yapıldığı yerde, back-end URL'sini şu şekilde ayarla:
     ```javascript
     const API_BASE_URL = "http://localhost:5000/api";
     ```

### 3. Front-end uygulamasını başlat ve back-end API ile iletişime geçtiğinden emin ol.

---

## Kurulum ve Çalıştırma

### 1. Gereksinimler
- Node.js (v14+)
- MongoDB Atlas hesabı veya yerel MongoDB kurulum
- Git

### 2. Projeyi Klonla
bash
git clone https://github.com/Aylinbaykan/Lonca-Backend.git
cd Lonca-Backend

# MongoDB Bağlantı Sorunlarını Giderme

Eğer backend çalıştırılırken şu hatayı alırsanız:

Error: Could not connect to any servers in your MongoDB Atlas cluster

Aşağıdaki adımları izleyerek sorunu çözebilirsiniz:

## Çözüm Adımları:
1. **Yüklü Mongoose Sürümünü Kontrol Edin**:
```bash
npm list mongoose
npm uninstall mongoose
npm install mongoose@8.5.2
npm list mongoose
node server.js







