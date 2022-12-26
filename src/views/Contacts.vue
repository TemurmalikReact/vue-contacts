<template>
  <div class="contacts">
    <div class="contacts__create">
      <button @click="$router.push(`/contact-form/create`)">Create Contact</button>
    </div>
    <div class="contacts__search">
      <input
        v-model="filterLetter"
        type="text"
        placeholder="Search Contact..."
      />
    </div>
    <div
      v-for="(contact, index) in filteredContacts"
      :key="contact.id"
      class="contact"
    >
      <div @click="toggleContact(index)" class="contact__content">
        <div class="contact__avatar">{{ contact.name[0] }}</div>
        <div class="info" :class="{ border_none: activeIndex === index }">
          <div class="info__name">{{ contact.name }}</div>
        </div>
      </div>
      <div v-show="activeIndex === index" class="contact__actions">
        <div class="contact__phone">Mobile: {{ contact.phone }}</div>
        <div class="contact__buttons">
          <button class="green">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g data-name="Layer 2">
                <g data-name="phone-call">
                  <rect width="24" height="24" opacity="0" />
                  <path
                    d="M13 8a3 3 0 0 1 3 3 1 1 0 0 0 2 0 5 5 0 0 0-5-5 1 1 0 0 0 0 2z"
                  />
                  <path
                    d="M13 4a7 7 0 0 1 7 7 1 1 0 0 0 2 0 9 9 0 0 0-9-9 1 1 0 0 0 0 2z"
                  />
                  <path
                    d="M21.75 15.91a1 1 0 0 0-.72-.65l-6-1.37a1 1 0 0 0-.92.26c-.14.13-.15.14-.8 1.38a9.91 9.91 0 0 1-4.87-4.89C9.71 10 9.72 10 9.85 9.85a1 1 0 0 0 .26-.92L8.74 3a1 1 0 0 0-.65-.72 3.79 3.79 0 0 0-.72-.18A3.94 3.94 0 0 0 6.6 2 4.6 4.6 0 0 0 2 6.6 15.42 15.42 0 0 0 17.4 22a4.6 4.6 0 0 0 4.6-4.6 4.77 4.77 0 0 0-.06-.76 4.34 4.34 0 0 0-.19-.73z"
                  />
                </g>
              </g>
            </svg>
          </button>
          <button class="light-blue">
            <svg viewBox="0 0 32 32">
              <g id="Layer1">
                <path
                  d="M30,7.991c0,-1.652 -1.339,-2.991 -2.991,-2.991l-22.018,0c-1.652,0 -2.991,1.339 -2.991,2.991c0,3.271 0,9.747 0,13.018c-0,1.652 1.339,2.991 2.991,2.991l6.676,-0c-0,0 3.733,2.8 3.733,2.8c0.356,0.267 0.844,0.267 1.2,-0l3.733,-2.8l6.676,-0c1.652,-0 2.991,-1.339 2.991,-2.991l0,-13.018Zm-19.4,9.009l10.8,0c0.552,-0 1,-0.448 1,-1c-0,-0.552 -0.448,-1 -1,-1l-10.8,0c-0.552,-0 -1,0.448 -1,1c-0,0.552 0.448,1 1,1Zm-3.6,-4l18,0c0.552,-0 1,-0.448 1,-1c-0,-0.552 -0.448,-1 -1,-1l-18,0c-0.552,-0 -1,0.448 -1,1c-0,0.552 0.448,1 1,1Z"
                />
              </g>
            </svg>
          </button>
          <button class="blue">
            <svg viewBox="0 0 30 30">
              <defs id="defs816">
                <inkscape:path-effect />
              </defs>
              <sodipodi:namedview>
                <sodipodi:guide
                  position="21.126168,22.794393"
                  orientation="1,0"
                  id="guide1575"
                  inkscape:locked="false"
                />
                <sodipodi:guide
                  position="22.682243,23.285047"
                  orientation="1,0"
                  id="guide1635"
                  inkscape:locked="false"
                />
                <sodipodi:guide
                  position="22.682243,7.6455921"
                  orientation="0,1"
                  id="guide1639"
                  inkscape:locked="false"
                />
                <sodipodi:guide
                  position="18.859863,18.859863"
                  orientation="1,0"
                  id="guide1242"
                  inkscape:locked="false"
                />
                <inkscape:grid type="xygrid" id="grid1103" />
              </sodipodi:namedview>
              <metadata id="metadata819">
                <rdf:RDF>
                  <cc:Work rdf:about="">
                    <dc:format>image/svg+xml</dc:format>
                    <dc:type
                      rdf:resource="http://purl.org/dc/dcmitype/StillImage"
                    />
                    <dc:title></dc:title>
                  </cc:Work>
                </rdf:RDF>
              </metadata>
              <g
                inkscape:label="Layer 1"
                inkscape:groupmode="layer"
                id="layer1"
                transform="translate(0,-289.0625)"
              >
                <path
                  d="M 5 8 C 3.8920001 8 3 8.8920001 3 10 L 3 22 C 3 23.108 3.8920001 24 5 24 L 17 24 C 18.108 24 19 23.108 19 22 L 19 17.599609 L 27 24 L 27 8 L 19 14.400391 L 19 10 C 19 8.8920001 18.108 8 17 8 L 5 8 z "
                  transform="translate(0,289.0625)"
                  id="rect970"
                />
              </g>
            </svg>
          </button>
          <button
            @click="$router.push(`/contact-details/${contact.id}`)"
            class="gray"
          >
            <svg viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.7890 19.6563 C 26.0780 19.6563 24.7421 18.2968 24.7421 16.6094 C 24.7421 14.8984 26.0780 13.5390 27.7890 13.5390 C 29.4999 13.5390 30.8358 14.8984 30.8358 16.6094 C 30.8358 18.2968 29.4999 19.6563 27.7890 19.6563 Z M 23.8749 40.8906 C 22.9374 40.8906 22.1874 40.2109 22.1874 39.25 C 22.1874 38.3359 22.9374 37.6094 23.8749 37.6094 L 26.8046 37.6094 L 26.8046 26.8516 L 24.2733 26.8516 C 23.3358 26.8516 22.5858 26.1719 22.5858 25.2109 C 22.5858 24.2968 23.3358 23.5703 24.2733 23.5703 L 28.7030 23.5703 C 29.8749 23.5703 30.5312 24.4141 30.5312 25.6797 L 30.5312 37.6094 L 33.4374 37.6094 C 34.3983 37.6094 35.1483 38.3359 35.1483 39.25 C 35.1483 40.2109 34.3983 40.8906 33.4374 40.8906 Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contacts",
  components: {},
  data() {
    return {
      activeIndex: null,
      filterLetter: "",
      contacts: [],
    };
  },
  computed: {
    filteredContacts() {
      if (!this.filterLetter) {
        return this.contacts;
      } else {
        return this.contacts.filter((contact) =>
          contact.name.toLowerCase().includes(this.filterLetter.toLowerCase())
        );
      }
    },
  },
  mounted() {
    const storedContacts = localStorage.getItem("contacts");
    this.contacts = JSON.parse(storedContacts);
  },
  methods: {
    toggleContact(index) {
      if (this.activeIndex === index) this.activeIndex = null;
      else this.activeIndex = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.contacts {
  display: flex;
  flex-direction: column;
  padding: 15px;

  
  &__create {
    margin-bottom: 15px;

    button {
      width: 100%;
      padding: 10px 15px;
      border-radius: 50px;
      background: rgb(100, 150, 250);
      color: #fff;
      font-weight: 600;
      border: none;
    }
  }

  &__search {
    margin-bottom: 25px;

    input {
      width: 100%;
      border: 2px solid rgb(225, 225, 225);
      padding: 10px 15px;
      border-radius: 50px;
    }
  }

  .contact {
    margin-bottom: 5px;

    &__content {
      display: grid;
      grid-template-columns: 0fr 12fr;
      gap: 15px;

      .info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        border-bottom: 1px solid rgb(245, 245, 245);
        flex: 1;

        &.border_none {
          border-bottom: none;
        }

        &__name {
          font-size: 16px;
          font-weight: 600;
        }
      }
    }

    &__avatar {
      border-radius: 100%;
      background: rgb(225, 25, 75);
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 16px;
      font-weight: 600;
      margin: 5px 0;
    }

    &__phone {
      font-size: 14px;
      font-weight: 600;
      text-align: center;
      margin-bottom: 15px;
    }

    &__actions {
      padding-bottom: 15px;
      border-bottom: 1px solid rgb(245, 245, 245);
    }

    &__buttons {
      display: flex;
      justify-content: space-around;

      button {
        border-radius: 100%;
        width: 40px;
        height: 40px;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;

        &.green {
          background: rgb(0, 150, 50);
        }

        &.light-blue {
          background: rgb(100, 150, 250);
        }

        &.blue {
          background: rgb(0, 50, 150);
        }

        &.gray {
          background: rgb(50, 50, 50);
        }

        svg {
          width: 20px;
          fill: #fff;
        }
      }
    }
  }
}
</style>
