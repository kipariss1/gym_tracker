<template>
    <base-layout pageTitle="The details">
        <ion-list>
            <ion-list v-for="memory in memories" :key="memory.id"
            router-link="/memories/{memory.id}"
            >
                {{ memory.title }}
            </ion-list>
        </ion-list>
    </base-layout>
</template>

<script>
    import { IonContent, IonList, IonItem } from '@ionic/vue';
    import BaseLayout from '../components/base/BaseLayout.vue';

    export default {
        components: {
            IonContent: IonContent,
            IonList: IonList,
            IonItem: IonItem,
            BaseLayout: BaseLayout,
        },
        data() {
            return {
                memories: [
                    {
                        id: 'm1',
                        title: 'Trip with LSD',
                        description: 'I used some LSD eeeeeeeeeeeeee',
                    },
                    {
                        id: 'm2',
                        title: 'Trip to Chelyabinsk',
                        description: 'I used some LSD eeeeeeeeeeeeee in Chelyabinsk',

                    },
                    {
                        id: 'm3',
                        title: 'Trip to "Korol i Shut" concert',
                        description: 'I used some LSD eeeeeeeeeeeeee at "Korol i shut" concert',
                    },
                ]
            };
        }
    }
</script>

<style scoped>
</style>
