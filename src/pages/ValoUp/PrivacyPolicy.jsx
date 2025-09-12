import React from "react";

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12 ring-1 ring-gray-100 dark:ring-gray-700">
        <header className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold">
              Privacy Policy
            </h1>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              ValoUp: Lineups for Valorant — Telepathy Studios
            </p>
            <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
              <strong>Last updated:</strong> September 12, 2025
            </p>
          </div>

          <div className="flex-shrink-0 flex flex-col items-end gap-2">
            <a
              href="/"
              className="text-sm px-3 py-2 rounded-lg hover:underline bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
            >
              Back to Home
            </a>

            <button
              onClick={() => window.print()}
              className="text-sm px-3 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
            >
              Print
            </button>
          </div>
        </header>

        <hr className="my-6 border-gray-200 dark:border-gray-700" />

        <section className="prose prose-neutral dark:prose-invert max-w-none">
          <h2>Introduction</h2>
          <p>
            Telepathy Studios (“we”, “our”, or “us”) built the{" "}
            <strong>ValoUp: Lineups for Valorant</strong> app as an offline
            game. This app is provided by Telepathy Studios at no cost and is
            intended for use as is.
          </p>

          <h2>Information Collection and Use</h2>
          <p>
            We do <strong>not</strong> collect, store, or share any personal
            information from users of this app.
          </p>
          <ul>
            <li>The app does not require you to create an account.</li>
            <li>
              The app does not access your contacts, location, photos, or any
              personal data on your device.
            </li>
            <li>The app does not use cookies or similar technologies.</li>
          </ul>

          <h2>Third-Party Services</h2>
          <p>
            This app does not use any third-party services (such as analytics,
            advertising networks, or external SDKs) that collect user
            information.
          </p>

          <h2>Children’s Privacy</h2>
          <p>
            Since we do not collect any personal information, this app is safe
            for use by children. If you are a parent or guardian and have
            concerns, please contact us at the email below.
          </p>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. When we make
            changes, we will update the <em>Last updated</em> date on this page.
            If changes are material, we will take reasonable steps to notify
            users via the app or other means.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy,
            please contact us at:
          </p>
          <ul>
            <li>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:support@telepathystudios.icu"
                className="text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                support@telepathystudios.icu
              </a>
            </li>
            <li>
              <strong>Website:</strong>{" "}
              <a
                href="https://telepathystudios.icu"
                target="_blank"
                rel="noreferrer"
                className="text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                telepathystudios.icu
              </a>
            </li>
          </ul>

          <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            This privacy policy is provided for informational purposes and does
            not constitute legal advice. If you need a legally-reviewed policy
            tailored for specific jurisdictions (e.g., GDPR, CCPA), consider
            consulting a qualified attorney.
          </p>
        </section>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
