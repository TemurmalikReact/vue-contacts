<template>
  <div class="details">
    <button @click="$router.push('/')" class="back">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.707 3.293a1 1 0 0 1 0 1.414L9.414 12l7.293 7.293a1 1 0 0 1-1.414 1.414l-8-8a1 1 0 0 1 0-1.414l8-8a1 1 0 0 1 1.414 0Z"
        />
      </svg>
    </button>
    <div class="content">
      <div class="content__avatar">{{ contact.name[0] }}</div>
      <div class="info">
        <div class="info__name">{{ contact.name }}</div>
        <div class="info__phone">Mobile: {{ contact.phone }}</div>
        <div class="info__email">Email: {{ contact.email }}</div>
      </div>
      <div class="buttons">
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
      </div>
    </div>
    <div class="journal-buttons">
      <button>Journal</button>
      <button>Storage Location</button>
    </div>
    <div class="footer">
      <button>
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <path d="m0 0h32v32h-32z" />
            <path
              d="m16.44769 1.81163555c.1931499.09670361.3497952.2533489.4464988.44649881l3.8157728 7.62139263c.1467639.29313741.4278859.49572441.7523987.54220671l8.5084136 1.2187218c.5467049.0783085.9264152.584982.8481067 1.1316869-.0316299.2208213-.1361864.4247266-.2970405.5792856l-6.1383271 5.8981019c-.2397734.2303897-.3493424.5648941-.2923421.8924939l1.4515597 8.3426061c.0946716.5441101-.2696702 1.0619449-.8137802 1.1566166-.2154934.0374944-.4373368.0033007-.6315385-.0973418l-7.6372916-3.957929c-.2885253-.1495246-.6317153-.1495246-.9202406 0l-7.63729157 3.957929c-.49034963.2541174-1.09385945.0626134-1.3479769-.4277363-.10064257-.1942017-.13483627-.4160451-.0973418-.6315385l1.45155972-8.3426061c.05700026-.3275998-.05256879-.6621042-.29234213-.8924939l-6.13832708-5.8981019c-.39823914-.3826539-.41087345-1.0156928-.02821951-1.413932.15455902-.1608541.35846426-.2654106.57928565-.2970405l8.50841362-1.2187218c.3245128-.0464823.6056348-.2490693.7523987-.54220671l3.8157728-7.62139263c.2472523-.49384685.848032-.69375117 1.3418788-.44649881zm-.44769 3.12736445-2.921584 5.835907c-.410939.8207847-1.1730003 1.4049311-2.0643049 1.5925449l-.1928912.0340753-6.4802199.9274728 4.6611995 4.4783784c.67136534.6450913 1.0024635 1.5622687.90459608 2.4807444l-.02756971.1967374-1.10622587 6.3551398 5.846639-3.0297375c.8037492-.4165327 1.7489012-.4462851 2.5728509-.089257l.1878711.089257 5.845639 3.0297375-1.1052259-6.3551398c-.1596007-.9172796.1160997-1.8526029.7384029-2.535182l.1386235-.1422998 4.6601995-4.4783784-6.4792199-.9274728c-.9086359-.1301505-1.703877-.6682546-2.1638443-1.454418l-.0933518-.1722022z"
              fill="#4b4b4b"
              fill-rule="nonzero"
            />
          </g>
        </svg>
      </button>
      <button @click="$router.push(`/contact-form/${contact.id}`)">
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path
            id="Path_121"
            data-name="Path 121"
            d="M-18.146-43.854a.5.5,0,0,0-.708,0l-8,8a.518.518,0,0,0-.109.163A.5.5,0,0,0-27-35.5v3a.5.5,0,0,0,.5.5h3a.5.5,0,0,0,.191-.038.518.518,0,0,0,.163-.109l8-8a.5.5,0,0,0,0-.708ZM-23.707-33H-26v-2.293l7.5-7.5,2.293,2.293Zm12.561-11.854-3-3a.5.5,0,0,0-.708,0l-2,2a.5.5,0,0,0,0,.708l3,3A.5.5,0,0,0-13.5-42a.5.5,0,0,0,.354-.146l2-2A.5.5,0,0,0-11.146-44.854ZM-13.5-43.207-15.793-45.5l1.293-1.293,2.293,2.293Z"
            transform="translate(27 48)"
          />
        </svg>
      </button>
      <button>
        <svg
          viewBox="0 0 16 16"
          id="share-16px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Path_38"
            data-name="Path 38"
            d="M-12.121,10.879a2.976,2.976,0,0,0-.292.355l-4.73-2.364A2.985,2.985,0,0,0-17,8a2.985,2.985,0,0,0-.143-.87l4.73-2.364a2.976,2.976,0,0,0,.292.355A2.989,2.989,0,0,0-10,6a2.989,2.989,0,0,0,2.121-.878A2.982,2.982,0,0,0-7,3,2.982,2.982,0,0,0-7.879.879a3,3,0,0,0-4.242,0A2.978,2.978,0,0,0-13,3a2.985,2.985,0,0,0,.143.87l-4.73,2.364a2.975,2.975,0,0,0-.292-.355,3,3,0,0,0-4.242,0A2.978,2.978,0,0,0-23,8a2.978,2.978,0,0,0,.879,2.121A2.989,2.989,0,0,0-20,11a2.989,2.989,0,0,0,2.121-.878,2.976,2.976,0,0,0,.292-.355l4.73,2.364A2.985,2.985,0,0,0-13,13a2.978,2.978,0,0,0,.879,2.121A2.989,2.989,0,0,0-10,16a2.989,2.989,0,0,0,2.121-.878A2.982,2.982,0,0,0-7,13a2.982,2.982,0,0,0-.879-2.121A3,3,0,0,0-12.121,10.879ZM-12,3a1.986,1.986,0,0,1,.586-1.414A1.993,1.993,0,0,1-10,1a1.993,1.993,0,0,1,1.414.585A1.986,1.986,0,0,1-8,3a1.986,1.986,0,0,1-.586,1.414,2,2,0,0,1-2.828,0A1.986,1.986,0,0,1-12,3Zm-9.414,6.414A1.986,1.986,0,0,1-22,8a1.986,1.986,0,0,1,.586-1.414A1.993,1.993,0,0,1-20,6a1.993,1.993,0,0,1,1.414.585A1.986,1.986,0,0,1-18,8a1.986,1.986,0,0,1-.586,1.414A2,2,0,0,1-21.414,9.414Zm10,5A1.986,1.986,0,0,1-12,13a1.986,1.986,0,0,1,.586-1.414A1.993,1.993,0,0,1-10,11a1.993,1.993,0,0,1,1.414.585A1.986,1.986,0,0,1-8,13a1.986,1.986,0,0,1-.586,1.414A2,2,0,0,1-11.414,14.414Z"
            transform="translate(23 -0.001)"
          />
        </svg>
      </button>
      <button @click="deletedContact">
        <svg viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 44.5235 48.6602 L 46.1407 14.3945 L 48.4844 14.3945 C 49.4454 14.3945 50.2187 13.5976 50.2187 12.6367 C 50.2187 11.6758 49.4454 10.8555 48.4844 10.8555 L 38.2422 10.8555 L 38.2422 7.3398 C 38.2422 3.9883 35.9688 1.8086 32.3595 1.8086 L 23.5938 1.8086 C 19.9844 1.8086 17.7344 3.9883 17.7344 7.3398 L 17.7344 10.8555 L 7.5391 10.8555 C 6.6016 10.8555 5.7813 11.6758 5.7813 12.6367 C 5.7813 13.5976 6.6016 14.3945 7.5391 14.3945 L 9.8829 14.3945 L 11.5000 48.6836 C 11.6641 52.0586 13.8907 54.1914 17.2657 54.1914 L 38.7579 54.1914 C 42.1095 54.1914 44.3595 52.0351 44.5235 48.6602 Z M 21.4844 7.5742 C 21.4844 6.2383 22.4688 5.3008 23.8751 5.3008 L 32.1016 5.3008 C 33.5313 5.3008 34.5157 6.2383 34.5157 7.5742 L 34.5157 10.8555 L 21.4844 10.8555 Z M 17.6173 50.6758 C 16.2579 50.6758 15.2500 49.6445 15.1797 48.2852 L 13.5391 14.3945 L 42.3907 14.3945 L 40.8438 48.2852 C 40.7735 49.6680 39.7891 50.6758 38.4063 50.6758 Z M 34.9610 46.5508 C 35.7344 46.5508 36.3204 45.9180 36.3438 45.0273 L 37.0469 20.2773 C 37.0704 19.3867 36.4610 18.7305 35.6641 18.7305 C 34.9376 18.7305 34.3282 19.4102 34.3048 20.2539 L 33.6016 45.0273 C 33.5782 45.8711 34.1641 46.5508 34.9610 46.5508 Z M 21.0626 46.5508 C 21.8595 46.5508 22.4454 45.8711 22.4219 45.0273 L 21.7188 20.2539 C 21.6954 19.4102 21.0626 18.7305 20.3360 18.7305 C 19.5391 18.7305 18.9532 19.3867 18.9766 20.2773 L 19.7032 45.0273 C 19.7266 45.9180 20.2891 46.5508 21.0626 46.5508 Z M 29.4298 45.0273 L 29.4298 20.2539 C 29.4298 19.4102 28.7969 18.7305 28.0235 18.7305 C 27.2500 18.7305 26.5938 19.4102 26.5938 20.2539 L 26.5938 45.0273 C 26.5938 45.8711 27.2500 46.5508 28.0235 46.5508 C 28.7735 46.5508 29.4298 45.8711 29.4298 45.0273 Z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactDetails",
  components: {},
  data() {
    return {
      contact: {
        id: null,
        name: "",
        phone: "",
        email: "",
      },
    };
  },
  mounted() {
    const storedContacts = localStorage.getItem("contacts");
    const contacts = JSON.parse(storedContacts);

    const currentContact = contacts.find(
      (contact) => contact.id == this.$route.params.id
    );

    this.contact = currentContact;
  },
  methods: {
    deletedContact() {
      const storedContacts = localStorage.getItem("contacts");
      const contacts = JSON.parse(storedContacts);

      const deletedContacts = contacts.filter(
        (contact) => contact.id != this.$route.params.id
      );

      localStorage.setItem("contacts", JSON.stringify(deletedContacts));
      this.$router.push("/");
    },
  },
};
</script>
<style lang="scss" scoped>
.details {
  position: fixed;
  height: 100vh;
  width: 100%;
  padding: 15px 0 0 0;
  background: rgb(245, 245, 245);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .back {
    width: fit-content;
    background: transparent;
    border: none;
    margin-left: 5px;

    svg {
      width: 35px;
      fill: rgb(75, 75, 75);
    }
  }

  .content {
    padding: 65px 25px 25px 25px;
    background: #fff;
    position: relative;
    border-radius: 25px;

    &__avatar {
      width: 75px;
      height: 75px;
      border-radius: 100%;
      background: rgb(225, 25, 75);
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 25px;
      font-weight: 600;
    }

    .info {
      text-align: center;

      &__name {
        font-size: 25px;
        font-weight: 600;
        margin-bottom: 15px;
      }

      &__phone {
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 5px;
      }

      &__email {
        font-size: 15px;
        font-weight: 600;
        color: rgb(175, 175, 175);
        margin-bottom: 25px;
      }
    }

    .buttons {
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

  .journal-buttons {
    padding: 25px 50px;
    display: flex;
    flex-direction: column;

    button {
      border: none;
      border-radius: 50px;
      margin-bottom: 20px;
      background: rgb(225, 225, 225);
      padding: 7.5px;
      font-size: 14px;
      font-weight: 600;
    }
  }

  .footer {
    padding: 15px 25px;
    display: flex;
    justify-content: space-around;

    button {
      background: transparent;
      border: none;

      svg {
        width: 20px;
        fill: rgb(75, 75, 75);
      }
    }
  }
}
</style>
