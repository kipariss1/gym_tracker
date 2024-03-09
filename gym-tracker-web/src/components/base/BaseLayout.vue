<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-back-button :default-href="pageDefaultBackLink"></ion-back-button>
                <ion-title>{{ pageTitle }}</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-list>
                <slot />
            </ion-list>
        </ion-content>
    </ion-page>
</template>

<script>
    import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton } from '@ionic/vue';

    export default {
        props: {
            pageTitle: {
                type: String,
                required: true,
            },
            pageDefaultBackLink: {
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
            IonBackButton: IonBackButton,
        }
    }
</script>

<style scoped>

</style>