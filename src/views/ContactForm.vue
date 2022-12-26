<template>
  <div class="form">
    <div class="form__avatar">
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
    </div>
    <div class="form__item">
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
      <input v-model="contact.name" type="text" placeholder="Name" />
    </div>
    <div class="form__item">
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
      <input v-model="contact.phone" type="number" placeholder="Phone Number" />
    </div>
    <div class="form__item">
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
      <input v-model="contact.email" type="email" placeholder="Email" />
    </div>
    <div class="actions">
      <button @click="cancel">Cancel</button>
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
  mounted() {
    if (this.$route.params.id == "create") {
      console.log("Create Page");
    } else {
      const storedContacts = localStorage.getItem("contacts");
      const contacts = JSON.parse(storedContacts);

      const currentContact = contacts.find(
        (contact) => contact.id == this.$route.params.id
      );

      this.contact = currentContact;
    }
  },
  methods: {
    cancel() {
      if (this.$route.params.id == "create") {
        this.$router.push("/");
      } else {
        this.$router.push(`/contact-details/${this.contact.id}`);
      }
    },

    save() {
      const id = this.$route.params.id;

      const storedContacts = localStorage.getItem("contacts");
      const contacts = JSON.parse(storedContacts);

      if (id == "create") {
        const newContacts = Array.isArray(contacts) ? contacts : [];
        newContacts.push(this.contact);

        localStorage.setItem("contacts", JSON.stringify(newContacts));

        this.$router.push("/");
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

        this.$router.push(`/contact-details/${this.contact.id}`);
      }
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

    svg {
      width: 25px;
      fill: #fff;
    }
  }

  &__item {
    background: #fff;
    border-radius: 25px;
    padding: 15px 25px;
    display: flex;
    margin-bottom: 25px;

    svg {
      width: 25px;
      fill: rgb(200, 200, 200);
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
