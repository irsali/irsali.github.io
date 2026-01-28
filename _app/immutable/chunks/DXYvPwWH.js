import"./Bzak7iHL.js";import"./BrF70vDP.js";import{i as o,j as p,n as a}from"./v0O3ks5t.js";const i={title:"MahApps",date:"2017-09-07",description:"MahApps",categories:["others"],tags:["MahApps"],readingTime:"1 min read"},{title:c,date:m,description:h,categories:g,tags:u,readingTime:d}=i;var r=o(`<h1>Pre Requirement</h1> <ol><li>Wpf project</li></ol> <h1>Getting Started</h1> <p>Install-Package MahApps.Metro</p> <h1>Superb Action conventions</h1> <ol><li><p>open up MainWindow.xaml or Shell View (View that contains your first
window)</p></li> <li><p>add this attribute inside the opening Window tag. (It’s how you
reference other namespaces in XAML):\\
xmlns:Controls=\\“clr-namespace:MahApps.Metro.Controls;assembly=MahApps.Metro\\”\\
or\\
xmlns:Controls=\\”<a href="http://metro.mahapps.com/winfx/xaml/controls%5C%22" rel="nofollow">http://metro.mahapps.com/winfx/xaml/controls\\”</a></p></li> <li><p>change &lt;Window ... tag to &lt;Controls:MetroWindow ... (remember to
change the closing tag too!)</p></li> <li><p>Remove window inheritance from code behind file.</p></li></ol> <h1>Using Built-In Styles</h1> <p>All of MahApp.Metro’s resources are contained within separate resource
dictionaries. In order for most of the controls to adopt the
MahApps.Metro theme, you will need to add the ResourceDictionaries to
your App.xaml.</p> <h3>App.xaml</h3> <p>&lt;Application x:Class=\\“WpfApplication.App\\”</p> <p>xmlns=\\”<a href="http://schemas.microsoft.com/winfx/2006/xaml/presentation%5C%22" rel="nofollow">http://schemas.microsoft.com/winfx/2006/xaml/presentation\\”</a></p> <p>xmlns:x=\\”<a href="http://schemas.microsoft.com/winfx/2006/xaml%5C%22" rel="nofollow">http://schemas.microsoft.com/winfx/2006/xaml\\”</a></p> <p>StartupUri=\\“MainWindow.xaml\\”&gt;</p> <p>&lt;Application.Resources&gt;</p> <p>&lt;ResourceDictionary&gt;</p> <p>&lt;ResourceDictionary.MergedDictionaries&gt;</p> <p>&lt;!-- MahApps.Metro resource dictionaries. Make sure that all file
names are Case Sensitive! --&gt;</p> <p>&lt;ResourceDictionary
Source=\\“pack://application:,,,/MahApps.Metro;component/Styles/Controls.xaml\\”
/&gt;</p> <p>&lt;ResourceDictionary
Source=\\“pack://application:,,,/MahApps.Metro;component/Styles/Fonts.xaml\\”
/&gt;</p> <p>&lt;ResourceDictionary
Source=\\“pack://application:,,,/MahApps.Metro;component/Styles/Colors.xaml\\”
/&gt;</p> <p>&lt;!-- Accent and AppTheme setting --&gt;</p> <p>&lt;ResourceDictionary
Source=\\“pack://application:,,,/MahApps.Metro;component/Styles/Accents/Blue.xaml\\”
/&gt;</p> <p>&lt;ResourceDictionary
Source=\\“pack://application:,,,/MahApps.Metro;component/Styles/Accents/BaseLight.xaml\\”
/&gt;</p> <p>&lt;/ResourceDictionary.MergedDictionaries&gt;</p> <p>&lt;/ResourceDictionary&gt;</p> <p>&lt;/Application.Resources&gt;</p> <p>&lt;/Application&gt;</p> <h1>Refereneces</h1> <p><a href="http://mahapps.com/guides/quick-start.html" rel="nofollow">http://mahapps.com/guides/quick-start.html</a></p>`,1);function f(t){var e=r();a(56),p(t,e)}export{f as default,i as metadata};
