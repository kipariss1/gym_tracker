<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>{{ pageName }}</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <h2>These are my memories!</h2>
            <ion-list>
                <slot />
            </ion-list>
        </ion-content>
    </ion-page>
</template>

<script>
    import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

    export default {
        props: {
            pageName: {
                type: String,
                required: true,
            }
        },
        components: {
            IonPage: IonPage,
            IonHeader: IonHeader,
            IonToolbar: IonToolbar,
            IonTitle: IonTitle,
            IonContent: IonContent,
        }
    }
</script>

<style scoped>

    h2 {
        margin: 10px;
    }

</style>