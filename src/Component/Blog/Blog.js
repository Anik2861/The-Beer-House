import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div className='question'>
            <div>
                <h2 className='title'>ইনলাইন এলিমেন্ট এবং ব্লক-লেভেল এলিমেন্ট পার্থক্য :</h2>
                <div>
                    <h5 >ইনলাইন এলিমেন্ট (Inline Element)</h5>
                    <p><small>ইনলাইন এলিমেন্ট শুরু হতে কোন নতুন লাইনের প্রয়োজন হয় না এবং এই এলিমেন্টটি শুধুমাত্র প্রয়োজন অনুযায়ী প্রস্থ দখল করবে।একাধিক html element কে একটা single লাইনে প্রদর্শনের display:inline ব্যবহৃত হয়। Inline Element গুলোতে  left এবং right সাইড এ mergin এবং padding ব্যবহার করতে পারেন, কিন্তু top  bottom এ padding এবং mergin ব্যবহার করতে পারবেন না। html element গুলোর মধ্যে block element গুলো যেমন: a,abbr,acronym,b,bdo,big,br,button,citem,code,code,</small>  </p>
                </div>
                <div>
                    <h5 >ব্লক-লেভেল এলিমেন্ট</h5>
                    <p><small>ব্লক-লেভেল এলিমেন্ট সর্বদা একটি নতুন লাইন থেকে শুরু হয় এবং ঐ লাইনের সম্পূর্ন প্রস্থ দখল করে নেয়(বাম থেকে ডানে যতটু্কু প্রসারিত হতে পারে)।html element গুলোকে block আকারে প্রদর্শনের জন্য css এর display:block ব্যবহৃত হয়। আর html element গুলোর মধ্যে block element গুলো যেমন: এবং address,article,aside,blockquote,canvas,dd,div,dl,dt,fieldset,figcaption,figure,figure গুলো বাই ডিফল্ট নিউ লাইনে বসে।</small></p>
                </div>
            </div>
            <div>
                <h2 className='title'>Semantic Elements কি</h2>
                <p>একটি Semantic Elements এর প্রধান কাজ হল পরিষ্কারভাবে ব্রাউজার এবং ডেভেলপার উভয় এর অর্থ বর্ণনা করা।
                    নতুন উপাদানসমূহ:
                    <li>article	নিবন্ধ সংজ্ঞায়িত করার জন্য ব্যবহৃত হয়,</li>
                    <li>aside	সাধারণত সাইডবারের জন্য ব্যবহৃত হয়
                    </li>
                    <li>bdi	একটি ভিন্ন দিক ফরম্যাটে লেখা প্রকাশের জন্য ব্যবহৃত হয়</li>
                    <li>command	কমান্ড বাটন সংজ্ঞায়িত করার জন্য ব্যবহৃত হয়</li>
                    <li>details	অতিরিক্ত বিশদ ব্যাখ্যা ব্যবহারকারীর প্রদর্শন অথবা আড়াল করতে ব্যবহৃত হয়</li>
                    <li>dialog	ডায়লগ বক্স অথবা উইন্ডোতে সংজ্ঞায়িত করার জন্য ব্যবহৃত হয়</li>
                    <li>figure	চিত্রাঙ্কনের, ডায়াগ্রামে, ছবি, কোড তালিকা ইত্যাদির স্বয়ংসম্পূর্ণ বিষয়বস্তু নির্ধারণ করা হয়</li>
                    <li>figcaption	figure উপাদান জন্য ক্যাপশন ব্যবহৃত হয়</li>
                    <li>footer	একটি বিভাগের জন্য পাদচরণ সংজ্ঞায়িত করার জন্য ব্যবহৃত হয়</li>
                    <li>hgroup	যখন একাধিক মাত্রার শিরোনাম থাকে তখন h1 থেকে h6 উপাদানের সমষ্টিকে বুঝায়</li>
                </p>
            </div>
        </div>
    );
};

export default Blog;