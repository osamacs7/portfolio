"use client";

import { motion } from "framer-motion";

export default function NotFound() {
  const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <h1 className="text-[120px] md:text-[180px] font-bold gradient-text leading-none">
            404
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-xl text-gray-400 mb-2">Page not found</p>
          <p className="text-gray-600 mb-8">
            Looks like this page has been compromised... or never existed.
          </p>

          <a
            href={basePath || "/"}
            className="px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition-all font-medium inline-block hover:shadow-lg hover:shadow-indigo-500/25"
          >
            Return to Base
          </a>
        </motion.div>

        <motion.pre
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-xs text-gray-700 font-mono glass rounded-xl p-4 inline-block text-left"
        >
{`$ curl -I /this-page
HTTP/1.1 404 Not Found
X-Security: Access Denied
X-Powered-By: Cloud Guard`}
        </motion.pre>
      </div>
    </main>
  );
}
