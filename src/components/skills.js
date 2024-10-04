import React from 'react'

export default function Skills() {
    return (
        <div className="max-w-lg w-96 mt-32 ">
            <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>
            <div className="mb-4">
                <div className="flex justify-between mb-1">
                    <span className="text-lg font-medium">Node.js</span>
                    <span className="text-lg font-medium">75%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                    <div className="bg-blue-600 h-4 rounded-full" style={{ width: '75%' }}></div>
                </div>
            </div>
            <div className="mb-4">
                <div className="flex justify-between mb-1">
                    <span className="text-lg font-medium">Next.js</span>
                    <span className="text-lg font-medium">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                    <div className="bg-indigo-600 h-4 rounded-full" style={{ width: '85%' }}></div>
                </div>
            </div>
            <div className="mb-4">
                <div className="flex justify-between mb-1">
                    <span className="text-lg font-medium">React</span>
                    <span className="text-lg font-medium">90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                    <div className="bg-green-600 h-4 rounded-full" style={{ width: '90%' }}></div>
                </div>
            </div>
            <div className="mb-4">
                <div className="flex justify-between mb-1">
                    <span className="text-lg font-medium">Prisma + SQLite</span>
                    <span className="text-lg font-medium">60%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                    <div className="bg-yellow-600 h-4 rounded-full" style={{ width: '60%' }}></div>
                </div>
            </div>
        </div>
    )
}
