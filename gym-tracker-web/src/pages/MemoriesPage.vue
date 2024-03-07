<template>
    <base-layout>
        <ion-list>
            <ion-item>Trip with LSD</ion-item>
            <ion-item>Trip to Chelyabinsk</ion-item>
            <ion-item>Trip to "Korol i Shut" concert</ion-item>
        </ion-list>
    </base-layout>
</template>

<script>
    import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem } from '@ionic/vue';
import BaseLayout from '../components/base/BaseLayout.vue';

    export default {
        components: {
            IonPage: IonPage,
            IonHeader: IonHeader,
            IonToolbar: IonToolbar,
            IonTitle: IonTitle,
            IonContent: IonContent,
            IonList: IonList,
            IonItem: IonItem,
            BaseLayout: BaseLayout,
        }
    }
</script>

<style scoped>
</style>
