<script>
  export default {
    name: "PricingPlans",
    data() {
      return {
        msg: "Welcome to Your Vue.js App",
        companyName: "Company Name",
        companyQuote: "Company Quote Here ...",
      };
    },
    mounted() {
      console.log("PricingPlans component mounted.");
    },
    methods: {
      // Add your methods here
    },
    computed: {
      // Add your computed properties here
    },
    watch: {
      // Add your watch properties here
    },
    filters: {
      // Add your filters here
    },
  };
</script>

<template>
  <div class="container py-3">
    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Modello 1</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">
              $0<small class="text-muted fw-light">/mo</small>
            </h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>10 users included</li>
              <li>2 GB of storage</li>
              <li>Email support</li>
              <li>Help center access</li>
            </ul>

          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Modello 2</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">
              $15<small class="text-muted fw-light">/mo</small>
            </h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>20 users included</li>
              <li>10 GB of storage</li>
              <li>Priority email support</li>
              <li>Help center access</li>
            </ul>

          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm border-primary">
          <div class="card-header py-3 text-white bg-primary border-primary">
            <h4 class="my-0 fw-normal">Modello 3</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">
              $29<small class="text-muted fw-light">/mo</small>
            </h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>30 users included</li>
              <li>15 GB of storage</li>
              <li>Phone and email support</li>
              <li>Help center access</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Table With Plans -->
    <h2 class="display-6 text-center mb-4">Compare plans</h2>

    <div class="table-responsive">
      <table class="table text-center">
        <thead>
          <tr>
            <th style="width: 34%"></th>
            <th style="width: 22%">Modello 1</th>
            <th style="width: 22%">Modello 2</th>
            <th style="width: 22%">Modello 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" class="text-start">Public</th>
            <td>
              <img src="/check.svg" alt="Check" width="24" height="24">
            </td>
            <td>
              <img src="/check.svg" alt="Check" width="24" height="24">
            </td>
            <td>
              <img src="/check.svg" alt="Check" width="24" height="24">
            </td>
          </tr>
          <tr>
            <th scope="row" class="text-start">Private</th>
            <td></td>
            <td>
              <img src="/check.svg" alt="Check" width="24" height="24">
            </td>
            <td>
              <img src="/check.svg" alt="Check" width="24" height="24">
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <th scope="row" class="text-start">Permissions</th>
            <td>
              <img src="/check.svg" alt="Check" width="24" height="24">
            </td>
            <td>
              <img src="/check.svg" alt="Check" width="24" height="24">
            </td>
            <td>
              <img src="/check.svg" alt="Check" width="24" height="24">
            </td>
          </tr>
          <tr>
            <th scope="row" class="text-start">Sharing</th>
            <td></td>
            <td>
              <img src="/check.svg" alt="Check" width="24" height="24">
            </td>
            <td>
              <img src="/check.svg" alt="Check" width="24" height="24">
            </td>
          </tr>
          <tr>
            <th scope="row" class="text-start">Unlimited members</th>
            <td></td>
            <td>
              <img src="/check.svg" alt="Check" width="24" height="24">
            </td>
            <td>
              <img src="/check.svg" alt="Check" width="24" height="24">
            </td>
          </tr>
          <tr>
            <th scope="row" class="text-start">Extra security</th>
            <td></td>
            <td></td>
            <td>
              <img src="/check.svg" alt="Check" width="24" height="24">
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
