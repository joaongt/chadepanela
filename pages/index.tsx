import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'

 const Home = () => {
  return (
      <div className="flex items-center justify-center h-full">
      <Head>
        <title>Our Wedding Pantry Shower</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center h-screen">
          <Image
            className="rounded shadow-md mb-6"
            src="/images/main.jpg"
            width="200"
            height="200"
            alt="Wedding Photo"
          />
          <h1 className="text-4xl font-extrabold text-gray-900">Our Love Story</h1>
          <p className="mt-3 text-xl text-gray-500 max-w-lg text-center">
            We met in college and have been inseparable ever since. After years of dating, we've
            decided to tie the knot and start the next chapter of our lives together.
          </p>
          <div className="mt-6">
            <Link href="/products" legacyBehavior>
              <a className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700">
                Buy Us a Gift
              </a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home;