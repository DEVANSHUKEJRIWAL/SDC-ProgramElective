import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Button from '@mui/material/Button';
import Courses from './Courses';
import Query from './Query';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';



const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Attendance', href: '#', current: false },
  { name: 'Examination', href: '#', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  

  const [cseAge, setCseAge] = useState('');
  const [cceAge, setCceAge] = useState('');
  const [itAge, setItAge] = useState('');

  // Define handleChange functions for each department
  const handleCseChange = (event) => {
    setCseAge(event.target.value);
  };

  const handleCceChange = (event) => {
    setCceAge(event.target.value);
  };

  const handleItChange = (event) => {
    setItAge(event.target.value);
  };

  const [registeredCourse, setRegisteredCourse] = useState('');

  const handleCourseRegistration = () => {
    // Here you can implement the logic to register the course
    // For demonstration, let's assume the course name is "Mathematics"
    setRegisteredCourse('Mathematics');
  };

  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleCourse = () => {
    // Perform the course registration logic here
    // For demonstration purposes, let's assume registration is successful
  
    setRegistrationSuccess(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setRegistrationSuccess(false);
  };




  return (
    <>
      
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">

          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                        alt="Your Company"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <Button className="h-10 w-15"><Query /></Button>
                      <button
                        type="button"
                        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">{user.name}</div>
                      <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                    </div>
                    <button
                      type="button"
                      className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
          </div>
        </header>
        <main>
          <Box sx={{ width: '250px', marginLeft: 'auto', marginRight: '12px' }}>
            <FormControl fullWidth>
              <InputLabel id="cse-simple-select-label">Preference</InputLabel>
              <Select
                labelId="cse-simple-select-label"
                id="cse-simple-select"
                value={cseAge}
                onChange={handleCseChange}
              >
                <MenuItem value={10}>1st preference</MenuItem>
                <MenuItem value={20}>2nd preference</MenuItem>
                <MenuItem value={30}>3rd preference</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <h1 className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8" style={{ fontWeight: 'bold', fontSize: '24px' }}>Courses Offered By CSE Dept.</h1>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8"><Courses /></div>
        </main>
        <main>
          <Box sx={{ width: '250px', marginLeft: 'auto', marginRight: '12px' }}>
            <FormControl fullWidth>
              <InputLabel id="cce-simple-select-label">Preference</InputLabel>
              <Select
                labelId="cce-simple-select-label"
                id="cce-simple-select"
                value={cceAge}
                onChange={handleCceChange}
              >
                <MenuItem value={10}>1st preference</MenuItem>
                <MenuItem value={20}>2nd preference</MenuItem>
                <MenuItem value={30}>3rd preference</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <h1 className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8" style={{ fontWeight: 'bold', fontSize: '24px' }}>Courses Offered By CCE Dept.</h1>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8"><Courses /></div>
        </main>
        <main>
          <Box sx={{ width: '250px', marginLeft: 'auto', marginRight: '12px' }}>
            <FormControl fullWidth>
              <InputLabel id="it-simple-select-label">Preference</InputLabel>
              <Select
                labelId="it-simple-select-label"
                id="it-simple-select"
                value={itAge}
                onChange={handleItChange}
              >
                <MenuItem value={10}>1st preference</MenuItem>
                <MenuItem value={20}>2nd preference</MenuItem>
                <MenuItem value={30}>3rd preference</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <h1 className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8" style={{ fontWeight: 'bold', fontSize: '24px' }}>Courses Offered By IT Dept.</h1>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8"><Courses /></div>
        </main>
      </div>
      <div className="mx-4">
        {/* <Link to="/dashboard/submit"> */}
          <Button variant="contained" className="float-right mr-4" onClick={handleCourse}>
            Submit
          </Button>
        {/* </Link> */}
      </div>
      <Snackbar open={registrationSuccess} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <MuiAlert onClose={handleCloseSnackbar} severity="success">
          Registration successful! You have registered for this course.
        </MuiAlert>
      </Snackbar>
      {registeredCourse && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <p>Registered Course: {registeredCourse}</p>
        </div>
      )}
    </>
  )
  }
