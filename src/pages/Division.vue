<template>
  <div class="min-h-screen bg-gray-50 pb-20">
    <!-- Banner -->
    <section class="applications-banner">
      <h4 class=" text:xl text-[#fff]  ">
        წყალმომარაგების სისტემასთან ინდივიდუალურად მიერთებულ მრავალბინიან
        საცხოვრებელ სახლში უძრავი ქონების გაყოფის (აბონენტის გაყოფის) შესახებ განაცხადი
      </h4>
    </section>

    <!-- Main form card -->
    <div class="bg-white w-1/2 mx-auto rounded-xl shadow-sm p-4 bg-white rounded-xl shadow-sm p-4 mt-5 mb-4">
      <!-- Header meta (from top of PDF) -->
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div>
          <label class="form-label">რეგ. №</label>
          <input v-model="form.regNumber" type="text" class="form-input" />
        </div>
        <div>
          <label class="form-label ">თარიღი</label>
          <input v-model="form.date" type="date" class="form-input" />
        </div>
        <div class="md:col-span-2">
          <label class="form-label">
            განცხადების ადრესატი (წყალმომარაგების ლიცენზიატის დასახელება)
          </label>
          <input v-model="form.addressee" type="text" class="form-input" />
        </div>
      </div>

      <!-- I. ძირითადი ინფორმაცია -->
      <h2 class="form-section-title">I. ინფორმაცია განმცხადებლის შესახებ (ძირითადი ინფორმაცია)</h2>

      <!-- 1. განაცხადის შემომტანი -->
      <div class="mt-4">
        <p class="form-label mb-2">1. მიერთების მსურველი (განმცხადებელი)</p>
        <div class="flex flex-wrap gap-4">
          <label class="inline-flex items-center gap-2">
            <input
              type="radio"
              value="ფიზიკური"
              v-model="form.applicantType"
              class="form-radio"
            />
            <span>ფიზიკური პირი</span>
          </label>
          <label class="inline-flex items-center gap-2">
            <input
              type="radio"
              value="იურიდიული"
              v-model="form.applicantType"
              class="form-radio"
            />
            <span>იურიდიული პირი</span>
          </label>
        </div>

        <div class="form-grid mt-3">
          <label class="form-label">
            განმცხადებლის დასახელება (სახელი, გვარი ან იურიდიული პირის სახელწოდება)
          </label>
          <input v-model="form.applicantName" type="text" class="form-input" />
        </div>
      </div>

      <!-- 2. პირადი ნომერი / საიდენტიფიკაციო კოდი -->
      <div class="form-grid mt-4">
        <label class="form-label">2. პირადი ნომერი / საიდენტიფიკაციო კოდი</label>
        <input v-model="form.idNumber" type="text" class="form-input" />
      </div>

      <!-- 3. საკონტაქტო ინფორმაცია -->
      <div class="mt-6">
        <p class="form-section-subtitle">3. განმცხადებლის საკონტაქტო ინფორმაცია</p>

        <div class="form-grid mt-2">
          <label class="form-label">3.1. მისამართი</label>
          <input v-model="form.contact.address" type="text" class="form-input" />
        </div>

        <div class="form-grid mt-2">
          <label class="form-label">
            3.2. ძირითადი და ალტერნატიული სატელეფონო ნომრები
          </label>
          <div class="grid md:grid-cols-2 gap-4">
            <input
              v-model="form.contact.mainPhone"
              type="text"
              class="form-input"
              placeholder="ძირითადი ნომერი"
            />
            <input
              v-model="form.contact.altPhone"
              type="text"
              class="form-input"
              placeholder="ალტერნატიული ნომერი"
            />
          </div>
        </div>

        <div class="form-grid mt-2">
          <label class="form-label">3.3. ელ.ფოსტის მისამართი (სურვილის შემთხვევაში)</label>
          <input v-model="form.contact.email" type="email" class="form-input" />
        </div>
      </div>

      <!-- 4. არსებული აბონენტის № -->
      <div class="form-grid mt-6">
        <label class="form-label">4. არსებული (ძირითადი) აბონენტის №</label>
        <input v-model="form.existingSubscriberNo" type="text" class="form-input" />
      </div>

      <!-- 5. საბანკო რეკვიზიტები -->
      <div class="form-grid mt-4">
        <label class="form-label">
          5. მიერთების მსურველის (განმცხადებლის) საბანკო რეკვიზიტები
        </label>
        <textarea
          v-model="form.bankDetails"
          rows="3"
          class="form-input"
          placeholder="ბანკის დასახელება, ანგარიში (IBAN), კოდი და ა.შ."
        ></textarea>
      </div>

      <!-- 6. გამოყოფილი ობიექტის მონაცემები -->
      <h2 class="form-section-title mt-8">II. გამოყოფილი ობიექტის მონაცემები</h2>

      <div class="form-grid mt-3">
        <label class="form-label">
          6.1. ადგილი (მისამართი), სადაც მოთხოვნილია აბონენტის გაყოფა
        </label>
        <input v-model="form.object.address" type="text" class="form-input" />
      </div>

      <div class="form-grid mt-3">
        <label class="form-label">
          6.2. გამოყოფილი უძრავი ქონების საკადასტრო კოდი
        </label>
        <input v-model="form.object.cadastralCode" type="text" class="form-input" />
      </div>

      <div class="mt-4">
        <p class="form-label mb-2">
          6.3. გამოყოფილი უძრავი ქონების მდებარეობა (ტერიტორიულ საზღვრებში)
        </p>
        <div class="flex flex-wrap gap-4">
          <label class="inline-flex items-center gap-2">
            <input
              type="radio"
              value="თვითმმართველ ქალაქში"
              v-model="form.object.locationType"
              class="form-radio"
            />
            <span>თვითმმართველ ქალაქში</span>
          </label>
          <label class="inline-flex items-center gap-2">
            <input
              type="radio"
              value="მუნიციპალიტეტის ტერიტორიაზე"
              v-model="form.object.locationType"
              class="form-radio"
            />
            <span>მუნიციპალიტეტის ტერიტორიაზე</span>
          </label>
        </div>
      </div>

      <!-- 7. მომხმარებელი -->
      <div class="form-grid mt-6">
        <label class="form-label">
          7. მომხმარებლის (საფასურის გადახდაზე პასუხისმგებელი პირის) სახელი, გვარი ან
          იურიდიული პირის დასახელება
        </label>
        <input v-model="form.payerName" type="text" class="form-input" />
      </div>

      <!-- 8. მოხმარების მიზანი -->
      <div class="mt-6">
        <p class="form-label mb-2">
          8. სასმელი წყლის მოხმარების მიზანი
        </p>
        <div class="flex flex-wrap gap-4">
          <label class="inline-flex items-center gap-2">
            <input
              type="radio"
              value="საყოფაცხოვრებო"
              v-model="form.waterPurpose"
              class="form-radio"
            />
            <span>საყოფაცხოვრებო</span>
          </label>
          <label class="inline-flex items-center gap-2">
            <input
              type="radio"
              value="არასაყოფაცხოვრებო"
              v-model="form.waterPurpose"
              class="form-radio"
            />
            <span>არასაყოფაცხოვრებო</span>
          </label>
        </div>
      </div>

      <!-- 9–12. მიერთების ტიპი და მრიცხველი -->
      <h2 class="form-section-title mt-8">III. მიერთების ტიპი და მრიცხველის ინფორმაცია</h2>

      <div class="form-grid mt-3">
        <label class="form-label">9. მიერთების ტიპი</label>
        <input v-model="form.connectionType" type="text" class="form-input" />
      </div>

      <div class="mt-4">
        <p class="form-label mb-2">10. მრავალბინიანი საცხოვრებელი სახლის სტატუსი</p>
        <label class="flex items-center gap-2 mb-1">
          <input
            type="radio"
            value="დიახ"
            v-model="form.multiApartmentIndividuallyMetered"
            class="form-radio"
          />
          <span>
            10.1 ☐ დიახ – ინდივიდუალურად გამრიცხველიანებულია
          </span>
        </label>
        <label class="flex items-center gap-2">
          <input
            type="radio"
            value="არა"
            v-model="form.multiApartmentIndividuallyMetered"
            class="form-radio"
          />
          <span>
            10.2 ☐ არა – გაუმრიცხველიანებელ მრავალბინიან სახლში
          </span>
        </label>
      </div>

      <div class="mt-4">
        <label class="flex items-start gap-2">
          <input
            type="checkbox"
            v-model="form.noExtraMeterNeeded"
            class="form-checkbox mt-1"
          />
          <span>
            11. გამოყოფილი უძრავი ქონების მომარაგებისთვის არ არის საჭირო ინდივიდუალური
            მრიცხველის მოწყობა
          </span>
        </label>
      </div>

      <div class="mt-4">
        <p class="form-label mb-2">
          12. მიერთების საფასურის გადახდის შესახებ ინფორმაცია
        </p>
        <label class="flex items-center gap-2 mb-1">
          <input
            type="checkbox"
            v-model="form.feePaid"
            class="form-checkbox"
          />
          <span>12.1. მიერთების საფასური გადახდილია სრულად</span>
        </label>
        <label class="flex items-center gap-2">
          <input
            type="checkbox"
            v-model="form.feeStandardDiameter"
            class="form-checkbox"
          />
          <span>
            12.2. 20 მმ სასმელი წყლის და/ან 100 მმ წყალარინების მილით მიერთების მოთხოვნა
          </span>
        </label>
      </div>

      <!-- 13–18. განცხადების შინაარსი / დადასტურებები -->
      <h2 class="form-section-title mt-8">IV. დადასტურებები და თანხმობები</h2>

      <div class="form-grid mt-3">
        <label class="form-label">
          13. დამატებითი ინფორმაცია / თხოვნა (ტექსტი)
        </label>
        <textarea
          v-model="form.additionalInfo"
          rows="3"
          class="form-input"
        ></textarea>
      </div>

      <div class="form-grid mt-4">
        <label class="form-label">
          14. დამატებითი განმარტება / პირობები (თუ არის საჭირო)
        </label>
        <textarea
          v-model="form.confirmationText"
          rows="3"
          class="form-input"
        ></textarea>
      </div>

      <!-- 15. საგადასახადო ანგარიშ-ფაქტურა -->
      <div class="mt-6">
        <p class="form-label mb-2">
          15. მესაჭიროება საგადასახადო ანგარიშ-ფაქტურა
        </p>
        <div class="flex flex-wrap gap-4">
          <label class="inline-flex items-center gap-2">
            <input
              type="radio"
              value="დიახ"
              v-model="form.needInvoice"
              class="form-radio"
            />
            <span>დიახ</span>
          </label>
          <label class="inline-flex items-center gap-2">
            <input
              type="radio"
              value="არა"
              v-model="form.needInvoice"
              class="form-radio"
            />
            <span>არა</span>
          </label>
        </div>
      </div>

      <!-- 16. შეტყობინების გაგზავნის ფორმა -->
      <div class="mt-6">
        <p class="form-label mb-2">
          16. წყალმომარაგების ლიცენზიატის მიერ შეტყობინების გაგზავნის ფორმა
        </p>
        <div class="flex flex-wrap gap-4">
          <label class="inline-flex items-center gap-2">
            <input
              type="radio"
              value="წერილობითი"
              v-model="form.notificationForm"
              class="form-radio"
            />
            <span>წერილობითი</span>
          </label>
          <label class="inline-flex items-center gap-2">
            <input
              type="radio"
              value="ელექტრონული"
              v-model="form.notificationForm"
              class="form-radio"
            />
            <span>ელექტრონული</span>
          </label>
        </div>
      </div>

      <!-- 17. ელექტროენერგია -->
      <div class="mt-6">
        <p class="form-label mb-2">
          17. გამოყოფილი უძრავი ქონება ინდივიდუალურად მარაგდება ელექტროენერგიით
        </p>
        <div class="flex flex-wrap gap-4">
          <label class="inline-flex items-center gap-2">
            <input
              type="radio"
              value="არა"
              v-model="form.electricitySupply"
              class="form-radio"
            />
            <span>არა</span>
          </label>
          <label class="inline-flex items-center gap-2">
            <input
              type="radio"
              value="დიახ"
              v-model="form.electricitySupply"
              class="form-radio"
            />
            <span>დიახ</span>
          </label>
        </div>
      </div>

      <!-- 18. მონაცემების დამუშავებაზე თანხმობა -->
      <div class="mt-6">
        <label class="flex items-start gap-2">
          <input
            type="checkbox"
            v-model="form.personalDataConsent"
            class="form-checkbox mt-1"
          />
          <span>
            18. ვეთანხმები, რომ განაცხადში მოცემული ჩემი პირადი ნომერი, ტელეფონის ნომერი
            და ელ. ფოსტის მისამართი დამ მუშავდეს ლიცენზიატის მიერ კანონმდებლობის
            შესაბამისად.
          </span>
        </label>
      </div>

      <!-- 19. განწილვადებით გადახდა -->
      <h2 class="form-section-title mt-8">V. საფასურის განწილვადებით გადახდა</h2>

      <div class="mt-4 space-y-3">
        <label class="flex items-center gap-2">
          <span class="form-label w-40 block">19.1. საფასურის 50%</span>
          <input
            type="checkbox"
            v-model="form.installment50"
            class="form-checkbox"
          />
        </label>

        <div class="form-grid">
          <label class="form-label">19.2. სხვა მოცულობა (არანაკლებ 50%-ის) – ციფრებში</label>
          <input
            v-model="form.installmentOther"
            type="number"
            class="form-input"
            placeholder="მაგ: 60"
          />
        </div>

        <div class="form-grid">
          <label class="form-label">
            19.3. პირველი გადასახადის ოდენობა (ციფრებში)
          </label>
          <input
            v-model="form.firstPayment"
            type="number"
            class="form-input"
          />
        </div>
      </div>

      <!-- 20–21 დოკუმენტები -->
      <h2 class="form-section-title mt-8">VI. თანდართული დოკუმენტები</h2>

      <div class="mt-4 space-y-3">
        <label class="flex items-start gap-2">
          <input
            type="checkbox"
            v-model="form.ownerConsentAttached"
            class="form-checkbox mt-1"
          />
          <span>
            20. თანდართულია ძირითადი ქონების მესაკუთრის თანხმობა (გაყოფამდე ქონება
            სარგებლობდა არსებული წყალმომარაგების წერტილიდან)
          </span>
        </label>

        <label class="flex items-start gap-2">
          <input
            type="checkbox"
            v-model="form.otherDocumentsAttached"
            class="form-checkbox mt-1"
          />
          <span>
            21. სხვა თანდართული დოკუმენტაცია (სურვილის შემთხვევაში)
          </span>
        </label>
      </div>

      <!-- Signature -->
      <div class="mt-10 grid md:grid-cols-2 gap-6">
        <div>
          <label class="form-label">განმცხადებლის ხელმოწერის ადგილი (ონლაინ ველი)</label>
          <input
            v-model="form.signature"
            type="text"
            class="form-input"
            placeholder="სახელი, გვარი ან ხელმოწერის იმიტაცია"
          />
        </div>
        <div>
          <label class="form-label">თარიღი</label>
          <input v-model="form.signatureDate" type="date" class="form-input" />
        </div>
      </div>

      <!-- Submit -->
      <div class="text-end  mt-10">
        <button @click="handleSubmit" class="submit-button">
          გაგზავნა
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        regNumber: "",
        date: "",
        addressee: "",
        applicantType: "",
        applicantName: "",
        idNumber: "",
        contact: {
          address: "",
          mainPhone: "",
          altPhone: "",
          email: ""
        },
        existingSubscriberNo: "",
        bankDetails: "",
        object: {
          address: "",
          cadastralCode: "",
          locationType: ""
        },
        payerName: "",
        waterPurpose: "",
        connectionType: "",
        multiApartmentIndividuallyMetered: "",
        noExtraMeterNeeded: false,
        feePaid: false,
        feeStandardDiameter: false,
        additionalInfo: "",
        confirmationText: "",
        needInvoice: "",
        notificationForm: "",
        electricitySupply: "",
        personalDataConsent: false,
        installment50: false,
        installmentOther: "",
        firstPayment: "",
        ownerConsentAttached: false,
        otherDocumentsAttached: false,
        signature: "",
        signatureDate: ""
      }
    };
  },
  methods: {
    handleSubmit() {
      // very simple required check for main fields
      if (
        !this.form.applicantName ||
        !this.form.idNumber ||
        !this.form.contact.address ||
        !this.form.contact.mainPhone ||
        !this.form.personalDataConsent
      ) {
        alert("გთხოვთ შეავსოთ სავალდებულო ველები და მონიშნოთ თანხმობა.");
        return;
      }

      alert("წარმატებით გაიგზავნა");
    }
  }
};
</script>
