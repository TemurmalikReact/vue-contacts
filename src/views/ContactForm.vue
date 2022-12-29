<template>
  <div class="form">
    <div class="form__avatar">
      <img src="../assets/phone.svg" alt="" />
    </div>
    <div class="form__item">
      <img src="../assets/phone-grey.svg" alt="" />
      <input v-model="contact.name" type="text" placeholder="Name" />
    </div>
    <div class="form__item">
      <img src="../assets/phone-grey.svg" alt="" />
      <input v-model="contact.phone" type="number" placeholder="Phone Number" />
    </div>
    <div class="form__item">
      <img src="../assets/phone-grey.svg" alt="" />
      <input v-model="contact.email" type="email" placeholder="Email" />
    </div>
    <div class="actions">
      <button @click="$router.back">Cancel</button>
      <button @click="save">Save</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
  components: {},
  data() {
    return {
      contact: {
        id: Date.now(),
        name: "",
        phone: "",
        email: "",
      },
    };
  },
  created() {
    const id = this.$route.params.id;

    if (id == "create") {
      console.log("Create Page");
    } else {
      const storedContacts = localStorage.getItem("contacts");
      const contacts = JSON.parse(storedContacts);

      const currentContact = contacts.find((contact) => contact.id == id);

      this.contact = currentContact;
    }
  },
  methods: {
    save() {
      const id = this.$route.params.id;

      const storedContacts = localStorage.getItem("contacts");
      const contacts = JSON.parse(storedContacts);

      if (id == "create") {
        const newContacts = Array.isArray(contacts) ? contacts : [];
        newContacts.push(this.contact);

        localStorage.setItem("contacts", JSON.stringify(newContacts));
      } else {
        const updateContacts = contacts.map((contact) =>
          id == contact.id
            ? {
                id: contact.id,
                name: this.contact.name,
                phone: this.contact.phone,
                email: this.contact.email,
              }
            : contact
        );

        localStorage.setItem("contacts", JSON.stringify(updateContacts));
      }

      this.$router.back();
    },
  },
};
</script>
<style lang="scss" scoped>
.form {
  background: rgb(245, 245, 245);
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;

  &__avatar {
    width: 75px;
    height: 75px;
    border-radius: 100%;
    background: rgb(225, 25, 75);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 25px auto;

    img {
      width: 25px;
    }
  }

  &__item {
    background: #fff;
    border-radius: 25px;
    padding: 15px 25px;
    display: flex;
    margin-bottom: 25px;

    img {
      width: 25px;
      margin-right: 25px;
    }

    input {
      flex: 1;
      border: none;
      font-size: 15px;
      font-weight: 600;

      &:focus {
        outline: none;
      }

      &::placeholder {
        color: rgb(200, 200, 200);
      }
    }
  }

  .actions {
    display: grid;
    grid-template-columns: 6fr 6fr;
    margin-top: auto;

    button {
      background: transparent;
      font-size: 16px;
      font-weight: 600;
      border: none;
      color: rgb(250, 150, 0);
      padding: 15px;
    }
  }
}
</style>
