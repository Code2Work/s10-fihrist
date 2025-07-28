# Fihrist

Şirket içi iletişim bilgi bankası olarak kullandığınız `Fihrist` uygulamasında UX (kullanıcı deneyimi) açısından 2 sorun fark edildi:

1. Yeni kişi eklendiğinde soldaki sideBarda eklenen kişi belirmiyor.
2. Bir kişi silindiğinde soldaki listeden kaybolmuyor.

**Sayfa yenilendikten sonra sorun kalmıyor, fakat o an değişiklikler yansımadığı için kullananların kafası karışıyor.**

Bu problemi sana atadılar.
Sen de bu sorunu `@tanstack/react-query` kullanarak çözmeye karar verdin.

- `@tanstack/react-query` ve `@tanstack/react-query-devtools` kur.
- `QueryClientProvider` componentını `App.jsx`e ekle ve [dokümantasyondaki](https://tanstack.com/query/latest/docs/framework/react/overview) gibi kullanıma hazır hale getir.
- `SideBar`da tüm kişileri listelemek için kullanılan kodu `useQuery` kullanarak düzenle.
- `Contact` componentinde kişi bilgisini almak için kullanılan kodu `useQuery` kullanarak düzenle.
- `Contact` componentinde kişiyi silmek için yazılan kodu `useMutation` kullanarak düzenle.

**Dikkat**

- Gerekli noktalarda `queryKey` ve `invalidateQueries` kullanman bekleniyor. Takıldığın yerlerde dokümantasyondaki örnekleri incele.
- TanStack Query entegrasyonundan sonra gereksiz hale gelecek `useState` ve `useEffect`leri silmeyi unutma.

```sh
ÖNEMLİ NOT:
Her adımdan sonra testlerde ilerleme olmayabilir.
Uygulamayı çalışır hale getirmeye odaklanırsanız
günün sonunda tüm testler geçecektir.
```

## 🚀 Projeye Başlama

### Adım 1: Projeyi Kendi Hesabınıza Kopyalayın

1. Bu sayfanın sağ üst köşesindeki **Fork** butonuna tıklayın
2. Kendi GitHub hesabınızda proje kopyası oluşacak

### Adım 2: Projeyi Bilgisayarınıza İndirin

Görseldeki adımları takip edin ya da terminali kullanabilirsiniz.

```bash
git clone [buraya-kendi-fork-linkinizi-yazın]
cd [proje-klasor-adi]
```

### Adım 3: Gerekli Kurulumları Yapın

Terminal açın ve sırasıyla şu komutları çalıştırın:

```bash
npm install
npm run c2w
```

> **💡 İpucu:** Bu komutlar gerekli paketleri yükler ve test sistemini başlatır.

### Adım 4: Projeyi Çalıştırın ve Browserda Görüntüleyin

Yeni bir terminal tabı açın ve şu komutu çalıştırın:

```bash
npm run dev
```

Bu komut projeyi çalıştıracak ve bir link verecek. Bu linki browserda açın ve yazdıklarınızın çıktısını gözlemleyin.

## 📝 Geliştirme Süreci

### 0. Öğrenci numaranızı `student_id.txt` dosyasına yazın 

### 1. Testleri Takip Edin

- Testlerin çalıştığı trminali açık tutun ve test çıktılarını izleyin
- Başarılı testler ✅, başarısız testler ❌ ile gösterilir

### 2. Adım Adım İlerleyin

- Her küçük ilerleme sonrası değişiklikleri kaydedin
- Testlerin durumunu kontrol edin
- Bir özelliği tamamen bitirdikten sonra commit yapın

### 3. Düzenli Commit Yapın

GitHub Desktop uygulamasını kullanarak ilerlemenizi sıklıkla GitHub'a gönderin.
Ya da terminali kullanabilirsiniz:

```bash
git add .
git commit -m "Anlamlı bir commit mesajı"
git push origin main
```

## 🧪 Otomatik Değerlendirme Sistemi

Bu proje otomatik test sistemi ile gelir. Test sonuçları terminal penceresinde görünür. Kırmızı (❌) testleri yeşile (✅) çevirmeye odaklanın.

## 🆘 Sorun Giderme

### Yaygın Sorunlar:

- **npm komutları çalışmıyor:** Node.js kurulu olduğundan emin olun
- **Testler çalışmıyor:** Terminal penceresini kapatıp `npm run c2w` komutunu tekrar çalıştırın

### Yardım İçin:

1. Terminal hatasını tam olarak okuyun
2. Dosya yollarının doğru olduğunu kontrol edin
3. Değişiklikleri kaydettiğinizden emin olun

## 📋 Çalışma Akışı Özeti

1. ✅ Projeyi fork edin ve clone edin
2. ✅ `npm install` ve `npm run c2w` çalıştırın
3. ✅ `npm run dev` ile projeyi çalıştırın ve size verdiği linki açarak yaptıklarınızı takip edin
4. ✅ Terminal'den test sonuçlarını takip edin
5. ✅ Düzenli olarak commit yapın
6. ✅ İlerleyişinizi GitHub'a push edin

**İyi çalışmalar! 🎨✨**
