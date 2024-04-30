/* This example requires Tailwind CSS v2.0+ */
import { MailIcon, PhoneIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'

const jobs = [
  {
    id:'1',
    name: 'Flying crew',
    description: 'Flying crew job description',
    status: 'Recruting   ',
    duration:'4 months',
    apply:'#',
    info:'#'
  },

  {
    id:'2',
    name: 'Flying crew',
    description: 'Flying crew job description',
    status: 'Recruting   ',
    duration:'4 months',
    apply:'#',
    info:'#'
  },

  {
    id:'3',
    name: 'Flying crew',
    description: 'Flying crew job description',
    status: 'Recruting   ',
    duration:'4 months',
    apply:'#',
    info:'#'
  },
]

export default function Carrers() {
  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {jobs.map((job) => (
        <li key={job.id} className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
          <div className="w-full flex items-center justify-between p-6 space-x-6">
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-3">
                <h3 className="text-gray-900 text-sm font-medium truncate">{job.name}</h3>
                <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                  {job.status}
                </span>
              </div>
              <p className="mt-1 text-gray-500 text-sm truncate">{job.description}</p>
              <p className="mt-1 text-red-500 text-sm truncate">{job.duration}</p>

            </div>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="w-0 flex-1 flex">
                <Link
                  to={job.info}
                  className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                >
                  <span className="ml-3">More Info</span>
                </Link>
              </div>
              <div className="-ml-px w-0 flex-1 flex">
                <Link
                  to={job.apply}
                  className="relative w-0 flex-1 bg-red-600 text-white inline-flex items-center justify-center py-4 text-sm  font-medium border border-transparent rounded-br-lg hover:text-red-100"
                >
                  <span className="ml-3">Apply</span>
                </Link>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
    </div>
  )
}
