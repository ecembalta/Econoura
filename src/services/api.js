import axios from "axios";

// API temel URL'sini burada tanımlayabilirsiniz
const API_URL = "http://localhost:3000/api"; // Gerçek API URL'nizi buraya ekleyin

// Kategori verilerini almak için API çağrısı
export const getCategories = async () => {
  try {
    const response = await axios.get(`${API_URL}/categories`);
    return response.data;
  } catch (error) {
    console.error("Kategori verileri alınırken hata oluştu:", error);
    // Hata durumunda varsayılan veri döndürebilirsiniz
    return [
      {
        id: 1,
        name: "Kadın",
        image: "https://picsum.photos/seed/women/400/400",
        subcategories: [
          { id: 1, name: "Bags", slug: "bags" },
          { id: 2, name: "Belts", slug: "belts" },
          { id: 3, name: "Cosmetics", slug: "cosmetics" },
          { id: 4, name: "Bags", slug: "bags-2" },
          { id: 5, name: "Hats", slug: "hats" },
        ],
      },
      {
        id: 2,
        name: "Erkek",
        image: "https://picsum.photos/seed/men/400/400",
        subcategories: [
          { id: 6, name: "Bags", slug: "bags" },
          { id: 7, name: "Belts", slug: "belts" },
          { id: 8, name: "Cosmetics", slug: "cosmetics" },
          { id: 9, name: "Bags", slug: "bags-2" },
          { id: 10, name: "Hats", slug: "hats" },
        ],
      },
      {
        id: 3,
        name: "Aksesuarlar",
        image: "https://picsum.photos/seed/accessories/400/400",
        subcategories: [
          { id: 6, name: "Bags", slug: "bags" },
          { id: 7, name: "Belts", slug: "belts" },
          { id: 8, name: "Cosmetics", slug: "cosmetics" },
          { id: 9, name: "Bags", slug: "bags-2" },
          { id: 10, name: "Hats", slug: "hats" },
        ],
      },
      {
        id: 4,
        name: "Çocuk",
        image: "https://picsum.photos/seed/kids/400/400",
        subcategories: [
          { id: 6, name: "Bags", slug: "bags" },
          { id: 7, name: "Belts", slug: "belts" },
          { id: 8, name: "Cosmetics", slug: "cosmetics" },
          { id: 9, name: "Bags", slug: "bags-2" },
          { id: 10, name: "Hats", slug: "hats" },
        ],
      },
    ];
  }
};

export const getBestSellerProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products/best-sellers`);
    return response.data;
  } catch (error) {
    console.error("En iyi satışlı ürünler alınırken hata oluştu:", error);
    return [
      {
        id: 1,
        title: "Product 1",
        category: "Category 1",
        description: "Description 1",
        price: 100,
        discountedPrice: 50,
        sales: 100,
        rating: 4.9,
        variants: [
          {
            id: 1,
            name: "Variant 1",
            color: "red",
            image: "https://picsum.photos/seed/product1/150/150",
          },
          {
            id: 2,
            name: "Variant 2",
            color: "blue",
            image: "https://picsum.photos/seed/product2/150/150",
          },
          {
            id: 3,
            name: "Variant 3",
            color: "green",
            image: "https://picsum.photos/seed/product3/150/150",
          },
        ],
      },
      {
        id: 2,
        title: "Product 2",
        category: "Category 2",
        description: "Description 2",
        price: 200,
        discountedPrice: 100,
        sales: 200,
        rating: 4.7,
        variants: [
          {
            id: 1,
            name: "Variant 1",
            color: "red",
            image: "https://picsum.photos/seed/product4/150/150",
          },
        ],
      },
      {
        id: 3,
        title: "Product 3",
        category: "Category 3",
        description: "Description 3",
        price: 300,
        discountedPrice: 200,
        sales: 300,
        rating: 4.5,
        variants: [
          {
            id: 1,
            name: "Variant 1",
            color: "blue",
            image: "https://picsum.photos/seed/product5/150/150",
          },
        ],
      },
      {
        id: 4,
        title: "Product 4",
        category: "Category 4",
        description: "Description 4",
        price: 400,
        discountedPrice: 300,
        sales: 400,
        rating: 4.3,
        variants: [
          {
            id: 1,
            name: "Variant 1",
            color: "green",
            image: "https://picsum.photos/seed/product6/150/150",
          },
        ],
      },
      {
        id: 5,
        title: "Product 5",
        category: "Category 5",
        description: "Description 5",
        price: 500,
        discountedPrice: 400,
        sales: 500,
        rating: 4.1,
        variants: [
          {
            id: 1,
            name: "Variant 1",
            color: "yellow",
            image: "https://picsum.photos/seed/product7/150/150",
          },
          {
            id: 2,
            name: "Variant 2",
            color: "red",
            image: "https://picsum.photos/seed/product8/150/150",
          },
        ],
      },
      {
        id: 6,
        title: "Product 6",
        category: "Category 6",
        description: "Description 6",
        price: 600,
        discountedPrice: 500,
        sales: 600,
        rating: 3.9,
        variants: [
          {
            id: 1,
            name: "Variant 1",
            color: "yellow",
            image: "https://picsum.photos/seed/product9/150/150",
          },
          {
            id: 2,
            name: "Variant 2",
            color: "green",
            image: "https://picsum.photos/seed/product10/150/150",
          },
        ],
      },
      {
        id: 7,
        title: "Product 7",
        category: "Category 7",
        description: "Description 7",
        discountedPrice: 500,
        price: 700,
        sales: 700,
        rating: 3.7,
        variants: [
          {
            id: 1,
            name: "Variant 1",
            color: "blue",
            image: "https://picsum.photos/seed/product11/150/150",
          },
          {
            id: 2,
            name: "Variant 2",
            color: "orange",
            image: "https://picsum.photos/seed/product12/150/150",
          },
        ],
      },
      {
        id: 8,
        title: "Product 8",
        category: "Category 8",
        description: "Description 8",
        discountedPrice: 600,
        price: 800,
        sales: 800,
        rating: 3.5,
        variants: [
          {
            id: 1,
            name: "Variant 1",
            color: "orange",
            image: "https://picsum.photos/seed/product13/150/150",
          },
          {
            id: 2,
            name: "Variant 2",
            color: "gray",
            image: "https://picsum.photos/seed/product14/150/150",
          },
        ],
      },
    ];
  }
};

export const getHeroSliderData = async () => {
  try {
    const response = await axios.get(`${API_URL}/slider/hero`);
    return response.data;
  } catch (error) {
    console.error("Hero slider verileri alınırken hata oluştu:", error);
    return [
      {
        id: "slide1",
        image: "https://picsum.photos/seed/fashion/1600/900",
        subTitle: "Summer 2025",
        title: "Yeni Sezon Koleksiyonu",
        description: "En son moda trendlerine göz atın ve tarzınızı yükseltin",
        buttonText: "Şimdi Keşfet",
        buttonLink: "/collections",
      },
      {
        id: "slide2",
        image: "https://picsum.photos/seed/shoes/1600/900",
        subTitle: "Spring 2025",
        title: "Özel İndirimler",
        description: "Sınırlı süre için %50'ye varan indirimlerden yararlanın",
        buttonText: "İndirimleri Gör",
        buttonLink: "/discounts",
      },
      {
        id: "slide3",
        image: "https://picsum.photos/seed/accessories/1600/900",
        subTitle: "Spring 2025",
        title: "Aksesuarlar",
        description: "Kombininizi tamamlayacak en şık aksesuarlar",
        buttonText: "Aksesuarları İncele",
        buttonLink: "/accessories",
      },
    ];
  }
};

export const getSliderData = async () => {
  try {
    const response = await axios.get(`${API_URL}/slider/trending`);
    return response.data;
  } catch (error) {
    console.error("Trend slider verileri alınırken hata oluştu:", error);
    return [
      {
        id: "slide1",
        image: "https://picsum.photos/seed/trend1/800/400",
        subTitle: "Summer 2025",
        title: "Yeni Gelenler",
        description:
          "We know how large objects will act, We know how are objects will act, We know",
        price: "$100",
        buttonText: "Sepete Ekle",
        buttonLink: "/new-arrivals",
      },
      {
        id: "slide2",
        image: "https://picsum.photos/seed/trend2/800/400",
        subTitle: "Spring 2025",
        title: "Trend Ürünler",
        description:
          "We know how large objects will act, We know how are objects will act, We know",
        price: "$150",
        buttonText: "Sepete Ekle",
        buttonLink: "/trending",
      },
      {
        id: "slide3",
        image: "https://picsum.photos/seed/trend3/800/400",
        subTitle: "Spring 2025",
        title: "Öne Çıkanlar",
        description:
          "We know how large objects will act, We know how are objects will act, We know",
        price: "$180",
        buttonText: "Sepete Ekle",
        buttonLink: "/featured",
      },
    ];
  }
};

export const getFeaturedPosts = async () => {
  try {
    const response = await axios.get(`${API_URL}/posts/featured`);
    return response.data;
  } catch (error) {
    console.error("Öne çıkan postlar alınırken hata oluştu:", error);

    return [
      {
        id: 1,
        image: "https://picsum.photos/seed/blog1/600/300",
        category: "Kadın Giyim",
        tags: ["Moda", "Yeni Sezon"],
        title: "2025 İlkbahar Kadın Modası: Gardırobunu Yenile!",
        description:
          "Yeni sezon kadın giyim trendleriyle stilini güncelle! Bu yazıda 2025 İlkbahar trend renklerinden, kombin tüyolarına kadar her şeyi senin için derledik.",
        date: "10 Mayıs 2025",
        comments: 14,
      },
      {
        id: 2,
        image: "https://picsum.photos/seed/blog2/600/300",
        category: "Erkek Ayakkabı",
        tags: ["Stil", "Konfor"],
        title: "Erkekler İçin En Rahat Günlük Ayakkabılar",
        description:
          "Yoğun bir günün sonunda ayakların hâlâ rahat olsun istiyorsan, bu ayakkabılar tam sana göre! Tarzından ödün vermeden konforu yakala.",
        date: "12 Mayıs 2025",
        comments: 9,
      },
      {
        id: 3,
        image: "https://picsum.photos/seed/blog3/600/300",
        category: "Aksesuarlar",
        tags: ["Popüler", "Stil Önerileri"],
        title: "2025’in En Trend Çanta Modelleri",
        description:
          "Kombinini tamamlayacak çanta modellerini keşfet! 2025 yılında sokak stilinde öne çıkan çantalarla tarzına farklı bir dokunuş kat.",
        date: "15 Mayıs 2025",
        comments: 11,
      },
      {
        id: 4,
        image: "https://picsum.photos/seed/blog4/600/300",
        category: "Kadın",
        tags: ["Yaz Sezonu", "Stil"],
        title: "Yaz 2025 İçin En Şık Elbise Kombinleri",
        description:
          "Yaz aylarında hem rahat hem stil sahibi görünmek istiyorsan bu kombin önerileri tam sana göre! 2025'in öne çıkan elbise modellerini kaçırma.",
        date: "22 Mayıs 2025",
        comments: 7,
      },
      {
        id: 5,
        image: "https://picsum.photos/seed/blog5/600/300",
        category: "Erkek",
        tags: ["Trend", "Günlük Stil"],
        title: "2025 Erkek Modasında Olmazsa Olmaz Parçalar",
        description:
          "2025 erkek modasında öne çıkan parçaları senin için derledik. Oversize tişörtlerden minimalist sneaker’lara, bu parçalara dolabında yer aç!",
        date: "28 Mayıs 2025",
        comments: 9,
      },
    ];
  }
};
