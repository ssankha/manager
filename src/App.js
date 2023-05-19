import React, { useState } from 'react';
import SideNavigation from "@cloudscape-design/components/side-navigation";
import { AppLayout, ContentLayout } from '@cloudscape-design/components';
import Cards from "@cloudscape-design/components/cards";
import Box from "@cloudscape-design/components/box";
import Button from "@cloudscape-design/components/button";
import Header from "@cloudscape-design/components/header";
import Link from '@cloudscape-design/components/link';
import profilePicture from './blank_profile.jpg';


function currentContent(currentTab, { setCurrentTab }, { setActiveHref }) {

  // clicked on the employees main tab from side bar
  if (currentTab === "Employees") {
    return (<div>
      <ContentLayout header={
        <div>
          <br></br>
          <Header variant='h1'
            description="Select of the below cells to see more information about that employee">
            Your Employees
          </Header>
          <br></br>
        </div>}>


        <Cards
          cardDefinition={{
            header: item => (
              <Link fontSize="heading-m" onFollow={() => {
                setCurrentTab(item.name);
                setActiveHref("#/employees/" + item.name.split(" ").join("").toLowerCase());
              }
              }>{item.name}</Link>),
              
            sections: [
              {
                id: "image",
                content: () => (
                  <div><img src={profilePicture} alt="profile" /></div>
                )
              },
              {
                id: "position",
                header: "Position",
                content: item => item.position
              },
              {
                id: "href",
              }
            ]
          }}
          cardsPerRow={[
            { cards: 1 },
            { minWidth: 500, cards: 2 }
          ]}
          items={[
            {
              name: "Employee 1",
              position: "Software Engineer",
              href: "#/employees/employee1"

            },
            {
              name: "Employee 2",
              position: "Lead Marketing Manager",
              href: "#/employees/employee2"
            },
            {
              name: "Employee 3",
              position: "Product Manager",
              href: "#/employees/employee3"
            },
            {
              name: "Employee 4",
              position: "Senior Software Engineer",
              href: "#/employees/employee4"
            },
            {
              name: "Employee 5",
              position: "AI Engineer",
              href: "#/employees/employee5"
            },

          ]}
          loadingText="Loading resources"
          empty={
            <Box textAlign="center" color="inherit">
              <b>No resources</b>
              <Box
                padding={{ bottom: "s" }}
                variant="p"
                color="inherit"
              >
                No resources to display.
              </Box>
              <Button>Create resource</Button>
            </Box>
          }

        />

      </ContentLayout>
    </div>);
  }

  // clicked on reports tab from side bar
  if (currentTab === "Reports") {
    return "reports";
  }

  // clicked on behavior link from sidebar
  if (currentTab === "Behavior") {
    return "behavior reports"
  }

  // clicked on reports link from sidebar
  if (currentTab === "Performance") {
    return "performance reports"
  }

  // clicked on an employee
  return "employee - " + currentTab;
}


function App() {
  const [activeHref, setActiveHref] = useState(
    "#/employees");

  const [currentTab, setCurrentTab] = useState("Employees")

  return (
    <AppLayout
      navigation={
        <SideNavigation
          activeHref={activeHref}
          header={{ href: "#/", text: "Navigation" }}
          onFollow={event => {
            if (!event.detail.external) {
              event.preventDefault();
              setActiveHref(event.detail.href);
              setCurrentTab(event.detail.text);
            }
          }}
          items={[
            {
              type: "expandable-link-group",
              text: "Employees",
              href: "#/employees",
              items: [
                {
                  type: "link",
                  text: "Employee 1",
                  href: "#/employees/employee1"
                },
                {
                  type: "link",
                  text: "Employee 2",
                  href: "#/employees/employee2"
                },
                {
                  type: "link",
                  text: "Employee 3",
                  href: "#/employees/employee3"
                },
                {
                  type: "link",
                  text: "Employee 4",
                  href: "#/employees/employee4"
                },
                {
                  type: "link",
                  text: "Employee 5",
                  href: "#/employees/employee5"
                }
              ]
            },
            {
              type: "expandable-link-group",
              text: "Reports",
              href: "#/reports",
              items: [
                {
                  type: "link",
                  text: "Performance",
                  href: "#/reports/performance",
                },
                {
                  type: "link",
                  text: "Behavior",
                  href: "#/reports/behavior",
                }
              ]
            },
          ]}
        />
      }

      content={currentContent(currentTab, { setCurrentTab }, { setActiveHref })}>
    </AppLayout>
  );
}

export default App;