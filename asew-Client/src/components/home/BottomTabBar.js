import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Home, Package, Settings, Compass, Search } from 'lucide-react-native';

const IconWrapper = ({ name, color, size = 22 }) => {
  const icons = {
    Home: Home,
    Package: Package,
    Settings: Settings,
    Explore: Compass,
    Search: Search,
  };
  const Icon = icons[name];
  return Icon ? <Icon color={color} size={size} /> : null;
};

export const BottomTabBar = ({ activeTab = 'Home', onTabPress }) => {
  const tabs = [
    { key: 'Home', label: 'Home', iconName: 'Home' },
    { key: 'Explore', label: 'Explore', iconName: 'Explore' },
    { key: 'Search', label: 'Search', iconName: 'Search' },
    { key: 'Settings', label: 'Settings', iconName: 'Settings' },
  ];

  return (
    <View style={styles.container}>
      {/* Floating Order Button */}
      <TouchableOpacity 
        style={styles.floatingOrderButton}
        onPress={() => onTabPress?.('Orders')}
        activeOpacity={0.8}
      >
        <Package color="#fff" size={26} />
      </TouchableOpacity>
      
      {/* Tab Bar */}
      <View style={styles.tabBar}>
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <TouchableOpacity
              key={tab.key}
              style={styles.tab}
              onPress={() => onTabPress?.(tab.key)}
            >
              <IconWrapper 
                name={tab.iconName} 
                color={isActive ? '#007AFF' : '#8E8E93'} 
                size={22}
              />
              <Text style={[
                styles.tabLabel,
                isActive && styles.tabLabelActive
              ]}>
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 8,
    paddingBottom: 24,
  },
  floatingOrderButton: {
    position: 'absolute',
    top: -28,
    alignSelf: 'center',
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#007AFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
    zIndex: 10,
  },
  tabBar: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 8,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 4,
  },
  tabLabel: {
    fontSize: 11,
    color: '#8E8E93',
    marginTop: 4,
  },
  tabLabelActive: {
    color: '#007AFF',
    fontWeight: '600',
  },
});
