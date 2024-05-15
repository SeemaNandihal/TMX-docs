/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
module.exports = {
 TMX : [
    {
      type: 'doc',
      label: 'Introduction',
      id : 'p0-1-Introduction',
    },
  
    {
      type: 'doc',
      label: 'Objective',
      id : 'p0-02-Objective',
    },  
  
    {
      type: 'category',
      label: 'Access to TMX Suite',
      items: [
        'Access to TMX Suite/p2-01-User Interface',
        'Access to TMX Suite/p2-02-System Interface',
        'Access to TMX Suite/p2-03-Installation Guide',
        'Access to TMX Suite/p2-04-User roles and Modules',
        
      ],
    },
    {
      type: 'category',
      label: 'Overview of TMX Suite',
      items: [
        'Overview of TMX Suite/p3-01-What is TMX suite',
        'Overview of TMX Suite/p3-02-How can TMX Suite help',
        'Overview of TMX Suite/p3-03-Who is it for',
               
      ],    
    },
    {
      type: 'category',
      label: 'TMX Work flow',
      items: [
        'TMX Work flow/p4-01-Home tab',
        'TMX Work flow/p4-02-Assignees',
        {
          "Projects": [
            "TMX Work flow/Projects/p5-01-Project details",
            "TMX Work flow/Projects/p5-02-Task details",
            "TMX Work flow/Projects/p5-03-Stage details",
            "TMX Work flow/Projects/p5-04-project report",
                   
          ],
        },
        'TMX Work flow/p6-01-Billing',  
        'TMX Work flow/p6-02-WPO',  

      ],
              
      }, 
      ], 
    }; 
      
    

      
 