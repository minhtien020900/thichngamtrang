<!--<template>-->
<!--  <div class="about">-->
<!--    <v-card-->
<!--        class="mx-auto"-->
<!--        max-width="500"-->
<!--    >-->
<!--&lt;!&ndash;       <v-system-bar&ndash;&gt;-->
<!--&lt;!&ndash;        color="indigo darken-2"&ndash;&gt;-->
<!--&lt;!&ndash;        dark&ndash;&gt;-->
<!--&lt;!&ndash;      >&ndash;&gt;-->
<!--&lt;!&ndash;        <v-spacer></v-spacer>&ndash;&gt;-->

<!--&lt;!&ndash;        <v-icon icon="mdi-window-minimize"></v-icon>&ndash;&gt;-->

<!--&lt;!&ndash;        <v-icon icon="mdi-window-maximize"></v-icon>&ndash;&gt;-->

<!--&lt;!&ndash;        <v-icon icon="mdi-close"></v-icon>&ndash;&gt;-->
<!--&lt;!&ndash;      </v-system-bar>&ndash;&gt;-->

<!--&lt;!&ndash;      <v-toolbar&ndash;&gt;-->
<!--&lt;!&ndash;        color="indigo"&ndash;&gt;-->
<!--&lt;!&ndash;        dark&ndash;&gt;-->
<!--&lt;!&ndash;      >&ndash;&gt;-->
<!--&lt;!&ndash;        <v-app-bar-nav-icon></v-app-bar-nav-icon>&ndash;&gt;-->

<!--&lt;!&ndash;        <v-toolbar-title>Discover</v-toolbar-title>&ndash;&gt;-->

<!--&lt;!&ndash;        <v-spacer></v-spacer>&ndash;&gt;-->

<!--&lt;!&ndash;        <v-btn icon="mdi-magnify"></v-btn>&ndash;&gt;-->
<!--&lt;!&ndash;      </v-toolbar>&ndash;&gt;-->

<!--      <v-container fluid>-->
<!--        <v-row dense>-->
<!--          <v-col-->
<!--              v-for="card in cards"-->
<!--              :key="card.title"-->
<!--              :cols="card.flex"-->
<!--          >-->
<!--            <v-card>-->
<!--              <v-img-->
<!--                  :src="card.src"-->
<!--                  class="align-end"-->
<!--                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"-->
<!--                  height="200px"-->
<!--                  width="auto"-->
<!--                  cover-->
<!--              >-->
<!--&lt;!&ndash;                <v-card-title class="text-white" v-text="card.title"></v-card-title>&ndash;&gt;-->
<!--              </v-img>-->

<!--&lt;!&ndash;              <v-card-actions>&ndash;&gt;-->
<!--&lt;!&ndash;                <v-spacer></v-spacer>&ndash;&gt;-->

<!--&lt;!&ndash;                <v-btn size="small" color="surface-variant" variant="text" icon="mdi-heart"></v-btn>&ndash;&gt;-->

<!--&lt;!&ndash;                <v-btn size="small" color="surface-variant" variant="text" icon="mdi-bookmark"></v-btn>&ndash;&gt;-->

<!--&lt;!&ndash;                <v-btn size="small" color="surface-variant" variant="text" icon="mdi-share-variant"></v-btn>&ndash;&gt;-->
<!--&lt;!&ndash;              </v-card-actions>&ndash;&gt;-->
<!--            </v-card>-->
<!--          </v-col>-->
<!--        </v-row>-->
<!--      </v-container>-->
<!--    </v-card>-->
<!--    <v-row>-->
<!--      <template v-for="(image,imgIdx) in imageLayout" :key="imgIdx">-->
<!--        <v-col :cols="image.cols">-->
<!--          <v-img-->
<!--              :src="`https://picsum.photos/500/300?image=${image.cols * 20}`"-->
<!--              cover-->
<!--              height="100%"-->
<!--          ></v-img>-->
<!--        </v-col>-->

<!--        <v-col v-if="image.children" cols="6" class="d-flex flex-column">-->
<!--          <v-row>-->
<!--            <v-col v-for="(children,childIdx) in image.children" :key="childIdx" :cols="children.cols">-->
<!--              <v-img-->
<!--                  :src="`https://picsum.photos/500/300?image=${children.cols + childIdx}`"-->
<!--                  cover-->
<!--                  height="100%"-->
<!--              ></v-img>-->
<!--            </v-col>-->
<!--          </v-row>-->
<!--        </v-col>-->
<!--      </template>-->
<!--    </v-row>-->
<!--  </div>-->
<!--</template>-->
<template>
<v-container>
  <img src=" @/src/assets/think.png">
  <v-img
      src="@/src/assets/think.png"
      height="125"
      class="bg-grey-lighten-2"
  ></v-img>

  <v-row>
    <v-col
        v-for="n in 9"
        :key="n"
        class="d-flex child-flex"
        cols="4"
    >
<!--      <v-img-->
<!--          :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"-->
<!--          :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"-->
<!--          aspect-ratio="1"-->
<!--          cover-->
<!--          class="bg-grey-lighten-2"-->
<!--      >-->
<!--      <img src="" alt="">-->
            <v-img
          src="@/src/assets/think.png"
          :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
          aspect-ratio="1"
          cover
          class="bg-grey-lighten-2"
      >
        <template v-slot:placeholder>
          <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
          >
            <v-progress-circular
                indeterminate
                color="grey-lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
  </v-row>

</v-container>
</template>
<script>
export default {
  data: () => ({
    imageLayout: [
      { cols: 4 },
      {
        cols: 8,
        children: [{ cols: 12 }, { cols: 12 }],
      },
      { cols: 6 },
      { cols: 3 },
      { cols: 9 },
      { cols: 4 },
      { cols: 8 },
    ],
  }),
}
</script>
<style>

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
