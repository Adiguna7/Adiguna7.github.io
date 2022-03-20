<template>
  <div class="bg-all">
    <v-container id="hero" fluid>
      <v-row
        class="d-flex align-center justify-center flex-column"
        style="height: 100%"
      >
        <vue-typed-js
          :strings="['Suryo Adiguna', 'Adi/Suryo']"
          :typeSpeed="100"
          :startDelay="100"
          :backSpeed="100"
          :loop="true"
        >
          <div class="white--text text-sm-h4 text-h5 text-center">
            Hello, I'm
            <span class="typing" style="color: #e31b6d"></span>
          </div>
        </vue-typed-js>
        <div class="white--text text-sm-h4 text-h5 text-center mt-7 mt-md-0">
          Undergraduate Student at Computer Engineering ITS
        </div>
      </v-row>
    </v-container>
    <!-- <v-card dark class="pl-md-16" flat>
      <v-tabs dark color="#e31b6d">
        <v-tab class="font-weight-bold">About</v-tab>
        <v-tab class="font-weight-bold">Education</v-tab>
        <v-tab class="font-weight-bold">Resume</v-tab>
        <v-tab class="font-weight-bold">Portofolio</v-tab>
        <v-tab class="font-weight-bold">Contact Me</v-tab>
      </v-tabs>
    </v-card> -->
    <v-container style="margin-top: 100px" class="bg--grey c-home">
      <v-row class="flex-column-reverse flex-md-row">
        <v-col md="7" class="d-flex flex-column justify-center mt-13 mt-md-0">
          <div
            class="font-weight-bold text-h5 color--red text-center text-md-left"
          >
            About
          </div>
          <div class="font-weight-bold text-h6 mt-3 text-center text-md-left">
            Driven student leveraging studies in Computer Engineering seeks
            real-world experience as Backend Engineer.
          </div>
          <div class="mt-3 text-center text-md-left">
            Offers Ai/Robotics/IOT, Backend Engineer and Web Developer skills.
            Eager to learn new technologies.
            <br />
            <br />
            Love problem solving, Digital electronics and Computer Vision.
          </div>
        </v-col>
        <v-col md="5" class="d-flex justify-center">
          <div class="l__imagediamond">
            <div class="l__imagesource"></div>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="c-home bg--grey mt-16">
      <v-row>
        <v-col cols="12">
          <div class="color--red font-weight-bold text-h5 text-center">
            My Resume
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="12" class="d-flex flex-column mt-9">
          <div class="font-weight-bold text-h6 text-center">Experienced</div>
          <div class="mt-3 text-h6 text-center">
            Involved in some project as web developer, backend engineer and
            robotic programmer with
          </div>
          <div class="color--red text-h4 mt-3 font-weight-bold text-center">
            Amazing Peoples
          </div>
          <small class="text-center mt-3"
            >*Click on experience organization for details</small
          >
        </v-col>
        <v-dialog v-model="dialog" width="700">
          <v-card>
            <v-card-title class="text-h5 font-weight-bold bg-all">
              Certificate/Moment
            </v-card-title>

            <v-carousel height="auto">
              <v-carousel-item
                v-for="(img, key) in moment[foldername]"
                :key="key"
              >
                <v-img
                  :src="require('~/static/' + foldername + '/' + img)"
                  :lazy-src="require('~/assets/img/lazy-load.jpg')"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="primary"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-carousel-item>
            </v-carousel>

            <!-- <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn class="font-weight-bold" text @click="dialog = false">
                Close
              </v-btn>
            </v-card-actions> -->
          </v-card>
        </v-dialog>
        <v-col cols="12" md="12" class="mt-13">
          <!-- <v-timeline v-if="mobile" dense> -->
          <v-timeline dark :dense="widthSize < 600 ? true : false">
            <v-timeline-item small color="#e31b6d" fill-dot>
              <v-row class="flex-column">
                <div
                  class="color--red font-weight-bold modal-on"
                  @click="
                    foldername = 'jmmi'
                    dialog = true
                  "
                >
                  JMMI ITS
                </div>
                <div class="mt-2 text-subtitle-2">
                  Staff of Web Development Division part of Islamic Press
                </div>
              </v-row>
            </v-timeline-item>
            <v-timeline-item
              small
              color="#e31b6d"
              fill-dot
              class="mt-3 flex-md-row"
            >
              <v-row class="justify-start justify-md-end">
                <div
                  class="color--red font-weight-bold modal-on"
                  @click="
                    foldername = 'mage5'
                    dialog = true
                  "
                >
                  Multimedia and Game Event 5 [MAGE 5]
                </div>
                <div class="mt-2 text-subtitle-2 text-left text-md-right">
                  Annual event of Computer Engineering Departement ITS. (Staff
                  of Web Development Division)
                </div>
              </v-row>
            </v-timeline-item>
            <v-timeline-item small color="#e31b6d" fill-dot class="mt-3">
              <v-row>
                <div class="color--red font-weight-bold">
                  Event of Electrical Faculty [EVOLTY 2020]
                </div>
                <div class="mt-2 text-subtitle-2">
                  Annual event of Electrical Faculty ITS Consist of Some Event.
                  (Staff of Web Development Division)
                </div>
              </v-row>
            </v-timeline-item>
            <v-timeline-item
              small
              color="#e31b6d"
              fill-dot
              class="mt-3 flex-row"
            >
              <v-row class="flex-column">
                <div
                  class="color--red font-weight-bold text-left text-md-right modal-on"
                  @click="
                    foldername = 'iris'
                    dialog = true
                  "
                >
                  ITS Robot with Intelligent System [IRIS Team]
                </div>
                <div class="mt-2 text-subtitle-2 text-left text-md-right">
                  Programmer Division
                </div>
              </v-row>
            </v-timeline-item>
            <v-timeline-item small color="#e31b6d" fill-dot class="mt-3">
              <v-row>
                <div class="color--red font-weight-bold">
                  B201 Telematics Laboratory
                </div>
                <div class="mt-2 text-subtitle-2">
                  Laboratory assistant, doing research on network security
                  topics
                </div>
              </v-row>
            </v-timeline-item>
            <v-timeline-item
              small
              color="#e31b6d"
              fill-dot
              class="mt-3 flex-row"
            >
              <v-row class="justify-start justify-md-end">
                <div
                  class="color--red font-weight-bold modal-on"
                  @click="
                    foldername = 'mage6'
                    dialog = true
                  "
                >
                  Multimedia and Game Event 6 [MAGE 6]
                </div>
                <div class="mt-2 text-subtitle-2 text-left text-md-right">
                  Annual event of Computer Engineering Departement ITS. (Lead of
                  Website and IT Development Division, Supervised and help team
                  to build olympiad system based on fun game).
                </div>
              </v-row>
            </v-timeline-item>
            <v-timeline-item small color="#e31b6d" fill-dot class="mt-3">
              <v-row>
                <div class="color--red font-weight-bold">
                  Direktorat Pengembangan Teknologi Sistem Informasi ITS
                </div>
                <div class="mt-2 text-subtitle-2">
                  Backend developer, Develop module based on laravel and
                  internal software architecture.
                </div>
              </v-row>
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="c-home bg--grey mt-16">
      <v-row>
        <v-col cols="12">
          <div class="color--red font-weight-bold text-h5 text-center">
            Education
          </div>
        </v-col>
      </v-row>
      <v-row class="mt-9">
        <v-col cols="12">
          <div class="text-center text-h5 font-weight-bold">
            <span class="color--red">"</span> No wealth like education and no
            poverty like ignorance <span class="color--red">"</span>
          </div>
          <div class="text-center color--red font-weight-bold">
            - Ali Ibn Abi Talib
          </div>
        </v-col>
      </v-row>
      <v-row class="mt-9">
        <v-col cols="12">
          <v-timeline dark>
            <v-timeline-item
              small
              color="#e31b6d"
              fill-dot
              class="mt-3 text-left"
            >
              <v-row>
                <v-col cols="12">
                  <div class="color--red font-weight-bold d-block">
                    SMP Negeri 1 Surabaya
                  </div>
                  <div class="mt-2 text-subtitle-2">2012 - 2015</div>
                </v-col>
              </v-row>
            </v-timeline-item>
            <v-timeline-item
              small
              color="#e31b6d"
              fill-dot
              class="mt-3 text-right"
            >
              <v-row>
                <v-col cols="12">
                  <div class="color--red font-weight-bold d-block">
                    SMA Negeri 2 Surabaya
                  </div>
                  <div class="mt-2 text-subtitle-2">2015 - 2018</div>
                </v-col>
              </v-row>
            </v-timeline-item>
            <v-timeline-item
              small
              color="#e31b6d"
              fill-dot
              class="mt-3 text-left"
            >
              <v-row>
                <v-col cols="12">
                  <div class="color--red font-weight-bold d-block">
                    Computer Engineering ITS Surabaya
                  </div>
                  <div class="mt-2 text-subtitle-2">2018 - Now</div>
                </v-col>
              </v-row>
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="c-home bg--grey mt-16">
      <v-row>
        <v-col cols="12">
          <div class="color--red font-weight-bold text-h5 text-center">
            Portofolio
          </div>
        </v-col>
      </v-row>
      <v-row class="mt-9 justify-center">
        <v-dialog v-model="dialog_portofolio" width="500">
          <v-card>
            <v-card-title class="text-h5 bg-all font-weight-bold">
              {{ active_text_portofolio.title }}
            </v-card-title>
            <v-card-text class="mt-3">
              {{ active_text_portofolio.description }}
              <br />
              <br />
              Stacks: {{ active_text_portofolio.stacks }}
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                class="font-weight-bold"
                text
                @click="dialog_portofolio = false"
              >
                Close
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-col
          v-for="(img, index) in portofolio"
          :key="img.id"
          cols="12"
          sm="4"
        >
          <v-img
            :src="require('~/assets/img/' + img.link)"
            transition="scale-transition"
            :lazy-src="require('~/assets/img/lazy-load.jpg')"
            style="cursor: pointer"
            @click.stop="
              dialog_portofolio = true
              active_text_portofolio = text_portofolio[index]
            "
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="primary"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
      </v-row>
    </v-container>
    <v-container id="footer" fluid class="mt-16">
      <v-row
        class="d-flex align-center justify-center flex-column"
        style="height: 100%"
      >
        <div class="white--text text-sm-h4 text-h5 text-center">
          Feel free to reach me
          <span style="color: #e31b6d">me</span>
          at
        </div>
        <div class="mt-9">
          <v-btn
            icon
            href="https://www.linkedin.com/in/suryo-adiguna-635b9818a/"
            text
            class="px-7"
          >
            <v-icon class="text-h3 color--icon"> mdi-linkedin </v-icon>
          </v-btn>
          <v-btn icon href="https://github.com/Adiguna7" text class="px-7">
            <v-icon class="text-h3 color--icon"> mdi-github </v-icon>
          </v-btn>
          <v-btn icon href="mailto:suryoadiguna@gmail.com" text class="px-7">
            <v-icon class="text-h3 color--icon"> mdi-gmail </v-icon>
          </v-btn>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'
// import VuetifyLogo from '~/components/VuetifyLogo.vue'
// import VueScreenSize from 'vue-screen-size'

export default {
  components: {},
  data() {
    return {
      test: 'test',
      portofolio: [
        { id: 1, link: 'esport.png' },
        { id: 2, link: 'evolty.png' },
        { id: 3, link: 'gamerstore.png' },
        { id: 4, link: 'jmmiits.png' },
        { id: 5, link: 'olim.png' },
        { id: 6, link: 'sewaaja.png' },
        { id: 7, link: 'mage6.png' },
        { id: 8, link: 'b201rent.png' },
        { id: 9, link: 'digdaya.png' },
        { id: 10, link: 'tangankanan.png' },
        { id: 11, link: 'beacon.png' },
        { id: 12, link: 'automatic.png' },
      ],
      image: [
        { id: 1, link: 'esport.png' },
        { id: 2, link: 'evolty.png' },
        { id: 3, link: 'gamerstore.png' },
        { id: 4, link: 'jmmiits.png' },
        { id: 5, link: 'olim.png' },
        { id: 6, link: 'sewaaja.png' },
        { id: 7, link: 'mage6.png' },
        { id: 8, link: 'b201rent.png' },
        { id: 9, link: 'digdaya.png' },
      ],
      widthSize: null,
      dialog: false,
      moment: {
        jmmi: ['certificate-jmmi.png'],
        mage5: ['certificate-mage5.png'],
        mage6: ['certificate-mage6.png'],
        iris: [
          '1st&bestdesign-regional-20.png',
          '1st&beststrategi-nasional-20.png',
          '2nd-nasional-21.png',
          'finalis-nasional-21.png',
          'umum-nasional-20.png',
        ],
      },
      foldername: 'jmmi',
      dialog_portofolio: false,
      text_portofolio: [
        {
          title: 'Mage 5',
          description:
            'Mage 5 is an annual competition organized by the faculty, this website is used as an information center by participants, as well as registration.',
          stacks: ['laravel', 'bootstrap'],
        },
        {
          title: 'Evolty',
          description:
            'Evolty is an annual competition organized by the faculty, this website is used as an information center by participants, as well as registration and online olympiad.',
          stacks: ['laravel', 'bootstrap', 'mysql'],
        },
        {
          title: 'GamerStore',
          description:
            'Try to create online shop for gamer, but has been deprecated',
          stacks: ['laravel', 'bootstrap', 'mysql'],
        },
        {
          title: 'JMMI ITS',
          description: 'Create website to publication about islamic article',
          stacks: ['wordpress', 'bootstrap', 'php'],
        },
        {
          title: 'Mage 5',
          description:
            'Mage 5 is an annual competition organized by the faculty, this website is used as an information center by participants, as well as registration.',
          stacks: ['laravel', 'bootstrap', 'mysql'],
        },
        {
          title: 'SewaAja',
          description:
            'Try to create platform for rent intended for my campus. has been deprecated',
          stacks: ['laravel', 'bootstrap', 'mysql'],
        },
        {
          title: 'Mage 6',
          description:
            'Mage 6 is an annual competition organized by the faculty, this website is used as an information center by participants, as well as registration and online olympiad.',
          stacks: ['laravel', 'vue', 'mysql', 'nginx'],
        },
        {
          title: 'B201 Rent',
          description:
            'Try to create platform for rent intended for my faculty. has been deprecated',
          stacks: ['php', 'mysql'],
        },
        {
          title: 'PT Digdaya',
          description: 'Create landing page for PT Digdaya',
          stacks: ['bootstrap'],
        },
        {
          title: 'Tangan Kanan',
          description:
            'Tangan kanan is a platform to get relief funds for people in need',
          stacks: ['react', 'next', 'nodejs', 'express', 'github ci/cd'],
        },
        {
          title: 'Beacon 2021',
          description:
            'Beacon 2021 is an annual competition organized by biomedical engineering major (ITS), this website is used as an information center by participants, as well as registration and online olympiad.',
          stacks: ['laravel', 'bootstrap', 'mysql', 'nginx', 'docker'],
        },
        {
          title: 'Automatic poultry feeder and drinker (IOT)',
          description:
            'use mqtt to create an integrated iot system, for automatic feeding and drinking of poultry',
          stacks: ['mqtt', 'websocket', 'nodejs', 'c', 'nodemcu'],
        },
      ],
      active_text_portofolio: null,
    }
  },
  watch: {
    $vssWidth(val) {
      this.widthSize = val
    },
  },
  created() {
    this.active_text_portofolio = this.text_portofolio[0]
  },
  mounted() {
    this.$ga.page(this.$router)
    // eslint-disable-next-line no-console
    // console.log(this.$vssWidth)
    this.widthSize = this.$vssWidth
  },
  methods: {
    imagePortofolio(data) {
      // eslint-disable-next-line no-console
      // console.log(this.portofolio)
      switch (data) {
        case 'js':
          this.portofolio.splice(0, this.portofolio.length)
          this.portofolio = this.image.slice()
          this.portofolio.splice(6, 1)
          break
        case 'vue':
          this.portofolio.splice(0, this.portofolio.length)
          this.portofolio = this.image.slice(6, 7)
          break
        case 'all':
          this.portofolio.splice(0, this.portofolio.length)
          this.portofolio = this.image.slice()
          break
      }
    },
  },
}
</script>

<style lang="scss" scoped>
* {
  color: white;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#hero {
  height: 100vh !important;
  width: 100vw !important;
  background-color: #252934;
}
#footer {
  height: 100vh !important;
  width: 100vw !important;
  background-color: #252934;
}
.bg--grey {
  background-color: #252934;
}

.color--red {
  color: #e31b6d;
}

.l {
  &__imagediamond {
    width: 175px;
    height: 175px;
    background-color: white;
    transform: rotate(45deg);
    overflow: hidden;
  }
  &__imagesource {
    transform: rotate(-45deg) scale(1.42) translate(-1.5%, 7%);
    width: 100%;
    height: 100%;
    background: url('~assets/img/fotononformal4.png');
    background-size: cover;
  }
}

.c-home {
  padding: 5em 3em 5em 3em;
}

.bg-all {
  background-color: #1c1f27;
}

.pos-fixed {
  position: fixed !important;
}

.color--icon {
  color: white !important;
  &:hover {
    color: #e31b6d !important;
  }
}

.modal-on {
  cursor: pointer;
}
</style>
