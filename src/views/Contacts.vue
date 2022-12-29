<template>
  <div class="contacts">
    <div class="contacts__create">
      <button @click="$router.push(`/contact-form/create`)">
        Create Contact
      </button>
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
            <img src="../assets/phone.svg" alt="" />
          </button>
          <button class="light-blue">
            <img src="../assets/message.svg" alt="" />
          </button>
          <button class="blue">
            <img src="../assets/video.svg" alt="" />
          </button>
          <button
            @click="$router.push(`/contact-details/${contact.id}`)"
            class="gray"
          >
            <img src="../assets/info.svg" alt="" />
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
  created() {
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

        img {
          width: 20px;
        }
      }
    }
  }
}
</style>
