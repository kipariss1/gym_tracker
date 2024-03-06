<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>All memories</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <h2>These are my memories!</h2>
            <ion-list>
                <ion-item>Ivan</ion-item>
                <ion-item>Alexandr</ion-item>
                <ion-item>Gorshok</ion-item>
            </ion-list>
        </ion-content>
    </ion-page>
</template>

<script>
    import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem } from '@ionic/vue';

    export default {
        components: {
            IonPage: IonPage,
            IonHeader: IonHeader,
            IonToolbar: IonToolbar,
            IonTitle: IonTitle,
            IonContent: IonContent,
            IonList: IonList,
            IonItem: IonItem,
        }
    }
</script>
