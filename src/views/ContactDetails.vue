<template>
  <div class="details">
    <button @click="$router.back" class="back">
      <img src="../assets/chevron-left.svg" alt="" />
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
          <img src="../assets/phone.svg" alt="" />
        </button>
        <button class="light-blue">
          <img src="../assets/message.svg" alt="" />
        </button>
        <button class="blue">
          <img src="../assets/video.svg" alt="" />
        </button>
      </div>
    </div>
    <div class="journal-buttons">
      <button>Journal</button>
      <button>Storage Location</button>
    </div>
    <div class="footer">
      <button>
        <img src="../assets/star.svg" alt="" />
      </button>
      <button @click="$router.push(`/contact-form/${contact.id}`)">
        <img src="../assets/edit.svg" alt="" />
      </button>
      <button>
        <img src="../assets/share.svg" alt="" />
      </button>
      <button @click="deletedContact">
        <img src="../assets/trash.svg" alt="" />
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
  created() {
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
      this.$router.back();
    },
  },
};
</script>
<style lang="scss" scoped>
.details {
  min-height: 100vh;
  width: 100%;
  padding: 15px 0 0 0;
  background: rgb(245, 245, 245);
  display: flex;
  flex-direction: column;

  .back {
    width: fit-content;
    background: transparent;
    border: none;
    margin-left: 5px;

    img {
      width: 35px;
    }
  }

  .content {
    padding: 65px 25px 25px 25px;
    background: #fff;
    position: relative;
    border-radius: 25px;
    margin-top: 75px;

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

        img {
          width: 20px;
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
    margin-top: auto;

    button {
      background: transparent;
      border: none;

      img {
        width: 20px;
      }
    }
  }
}
</style>
