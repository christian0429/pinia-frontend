// src/stores/productStore.js
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useProductStore = defineStore('product', () => {
    const totalOrderCount = ref(0);
    const products = ref([
        {
            id: 1,
            name: '저스트두잇',
            manufacturer: '나이카',
            image: 'https://cdn.pixabay.com/photo/2016/07/28/14/03/birthday-1547980_640.png',
            price: 1000,
            orderCount: 10,
        },
        {
            id: 2,
            name: '레릿고',
            manufacturer: '아디도스',
            image: 'https://cdn.pixabay.com/photo/2013/07/13/13/34/linux-161107_1280.png',
            price: 2000,
            orderCount: 5,
        },
    ]);

    const orderProduct = (productId) => {
        const product = products.value.find(p => p.id === productId);
        if (product) {
            product.orderCount++;
            totalOrderCount.value++;
        }
    };

    return {
        totalOrderCount,
        products,
        orderProduct,
    };
});
